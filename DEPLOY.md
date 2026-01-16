# Deploy via Portainer com Git URL

Este guia explica como fazer deploy da aplicação usando Portainer via repositório Git.

## Pré-requisitos

- Portainer instalado e configurado
- Acesso ao repositório Git
- Docker e Docker Compose disponíveis no servidor

## Arquivos de Deploy

O projeto inclui os seguintes arquivos para deploy:

- `Dockerfile` - Build da aplicação em multi-stage
- `docker-compose.yml` - Orquestração dos serviços
- `.dockerignore` - Otimização do build
- `.env.production.example` - Exemplo de variáveis de ambiente

## Configuração no Portainer

### 1. Preparar Variáveis de Ambiente

Antes de criar a stack, prepare um arquivo `.env` com as seguintes variáveis:

```env
# PostgreSQL
POSTGRES_DB=lp_f3
POSTGRES_USER=postgres
POSTGRES_PASSWORD=SuaSenhaSegura123!
POSTGRES_PORT=5432

# Application
NODE_ENV=production
PORT=3001

# Session Secret (gere com: openssl rand -base64 32)
SESSION_SECRET=sua_chave_secreta_aqui
```

### 2. Criar Stack no Portainer

1. Acesse o Portainer
2. Navegue até **Stacks** > **Add stack**
3. Escolha **Repository** como método de build
4. Configure os campos:
   - **Name**: `lp-f3` (ou nome desejado)
   - **Repository URL**: URL do seu repositório Git
   - **Repository reference**: `refs/heads/main` (ou branch desejada)
   - **Compose path**: `docker-compose.yml`
   - **Authentication**: Configure se repositório privado

### 3. Configurar Variáveis de Ambiente

Na seção **Environment variables**, adicione as variáveis do arquivo `.env` ou faça upload do arquivo.

Variáveis obrigatórias:
- `POSTGRES_PASSWORD` - Senha do PostgreSQL
- `SESSION_SECRET` - Chave secreta para sessões

Variáveis opcionais (com valores padrão):
- `POSTGRES_DB` - Nome do banco (padrão: lp_f3)
- `POSTGRES_USER` - Usuário do banco (padrão: postgres)
- `PORT` - Porta da aplicação (padrão: 3001)

### 4. Deploy

1. Clique em **Deploy the stack**
2. Aguarde o build da imagem e inicialização dos containers
3. Verifique os logs em **Containers** para confirmar que tudo iniciou corretamente

## Arquitetura

A stack cria dois serviços:

### PostgreSQL (postgres)
- Imagem: `postgres:16-alpine`
- Porta: 5432 (mapeada para host)
- Volume persistente: `postgres_data`
- Health check configurado

### Aplicação (app)
- Build a partir do Dockerfile
- Porta: 3001 (mapeada para host)
- Depende do PostgreSQL estar saudável
- Health check via endpoint `/api/health`

## Endpoints

Após deploy bem-sucedido:

- **Aplicação**: `http://seu-servidor:3001`
- **API**: `http://seu-servidor:3001/api/*`
- **Health Check**: `http://seu-servidor:3001/api/health`

## Gerenciamento de Dados

### Backup do Banco de Dados

```bash
docker exec lp_f3_postgres pg_dump -U postgres lp_f3 > backup.sql
```

### Restore do Banco de Dados

```bash
docker exec -i lp_f3_postgres psql -U postgres lp_f3 < backup.sql
```

### Migração do Schema

Execute dentro do container da aplicação:

```bash
docker exec lp_f3_app npm run db:push
```

## Troubleshooting

### Verificar logs da aplicação
```bash
docker logs lp_f3_app -f
```

### Verificar logs do PostgreSQL
```bash
docker logs lp_f3_postgres -f
```

### Reiniciar serviços
Via Portainer: Acesse a stack e clique em "Update the stack"

Via CLI:
```bash
docker-compose restart
```

### Verificar conectividade do banco
```bash
docker exec lp_f3_app node -e "require('pg').Pool({connectionString: process.env.DATABASE_URL}).query('SELECT 1').then(() => console.log('OK')).catch(e => console.error(e))"
```

## Segurança

- Altere `POSTGRES_PASSWORD` para uma senha forte
- Gere um `SESSION_SECRET` único usando: `openssl rand -base64 32`
- Configure firewall para expor apenas portas necessárias
- Considere usar reverse proxy (nginx/traefik) com HTTPS
- Não commite arquivos `.env` no repositório

## Atualizações

Para atualizar a aplicação:

1. Push das alterações para o repositório Git
2. No Portainer, acesse a stack
3. Clique em "Pull and redeploy"
4. Ou use "Update the stack" para rebuild completo

## Volumes

A stack cria um volume persistente:
- `postgres_data` - Dados do PostgreSQL

Os dados persistem mesmo após parar/remover os containers.

## Network

Todos os serviços estão na rede `lp_f3_network` (bridge), permitindo comunicação interna entre containers.
