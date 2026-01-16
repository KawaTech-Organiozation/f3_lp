# LP F3 - Landing Page F3 Partners

Landing page full-stack para F3 Partners, uma rede de parcerias para o mercado financeiro e imobiliário.

## Stack Tecnológica

### Frontend
- **React** 18.3.1 com TypeScript
- **Vite** 7.3.0 (build tool com HMR)
- **Tailwind CSS** 3.4.17 (estilização)
- **Radix UI** (componentes acessíveis)
- **React Hook Form** + **Zod** (formulários e validação)
- **Framer Motion** (animações)
- **TanStack Query** (gerenciamento de estado assíncrono)

### Backend
- **Express** 4.21.2 (servidor Node.js)
- **TypeScript** (type safety)
- **Drizzle ORM** 0.39.3 (ORM type-safe)
- **PostgreSQL** (banco de dados)
- **Passport** (autenticação)
- **WebSocket** (comunicação real-time)

### Build & Dev Tools
- **tsx** (executor TypeScript)
- **esbuild** (bundler de produção)
- **PostCSS** + **Autoprefixer**

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18.x ou 20.x ([Download](https://nodejs.org/))
- **PostgreSQL** 14+ ([Download](https://www.postgresql.org/download/))
- **npm** (incluído com Node.js)

## Instalação do PostgreSQL

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### macOS (com Homebrew)
```bash
brew install postgresql@16
brew services start postgresql@16
```

### Windows
Baixe o instalador em: https://www.postgresql.org/download/windows/

## Configuração

### 1. Clone e instale dependências

```bash
cd lp_f3
npm install
```

### 2. Configure o banco de dados PostgreSQL

```bash
# Entre no PostgreSQL
sudo -u postgres psql

# Dentro do psql, execute:
CREATE DATABASE lp_f3;
CREATE USER seu_usuario WITH PASSWORD 'sua_senha';
GRANT ALL PRIVILEGES ON DATABASE lp_f3 TO seu_usuario;
\q
```

### 3. Configure as variáveis de ambiente

Edite o arquivo `.env` com suas credenciais do PostgreSQL:

```env
DATABASE_URL=postgresql://seu_usuario:sua_senha@localhost:5432/lp_f3
NODE_ENV=development
PORT=3001
SESSION_SECRET=seu-secret-seguro-aqui
```

### 4. Execute as migrations do banco

```bash
npm run db:push
```

Isso criará a tabela `leads` e `session` no banco de dados.

## Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

Isso iniciará:
- **Servidor Express** na porta 3001
- **Vite dev server** com HMR (hot module replacement)

Acesse: http://localhost:5173

A aplicação fará proxy das chamadas `/api/*` para o servidor Express automaticamente.

### Modo Produção

```bash
# Build
npm run build

# Start
npm start
```

Acesso: http://localhost:3001

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build de produção (cliente + servidor)
- `npm run build:vite` - Build apenas do cliente
- `npm start` - Inicia servidor de produção
- `npm run check` - Verificação de tipos TypeScript
- `npm run db:push` - Aplica schema ao banco de dados

## Estrutura do Projeto

```
lp_f3/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── App.tsx        # Componente raiz
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Estilos globais
│   └── index.html         # HTML template
├── server/                 # Backend Express
│   ├── index.ts           # Servidor principal
│   ├── db.ts              # Configuração do banco
│   ├── routes.ts          # Rotas da API
│   └── storage.ts         # Camada de dados
├── shared/                 # Código compartilhado
│   └── schema.ts          # Schema do banco (Drizzle + Zod)
├── script/                 # Scripts de build
│   └── build.ts           # Script de build de produção
├── .env                    # Variáveis de ambiente (não commitar)
├── .env.example            # Template de variáveis
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
├── tailwind.config.ts      # Configuração Tailwind
└── drizzle.config.ts       # Configuração Drizzle
```

## API Endpoints

### POST /api/leads
Cria um novo lead no sistema.

**Body:**
```json
{
  "name": "Nome Completo",
  "company": "Empresa LTDA",
  "email": "email@example.com",
  "phone": "(11) 99999-9999",
  "cityState": "São Paulo/SP",
  "segment": "Financeiro",
  "message": "Mensagem opcional"
}
```

**Response:** 201 Created
```json
{
  "id": 1,
  "name": "Nome Completo",
  "company": "Empresa LTDA",
  "email": "email@example.com",
  "phone": "(11) 99999-9999",
  "cityState": "São Paulo/SP",
  "segment": "Financeiro",
  "message": "Mensagem opcional",
  "createdAt": "2024-01-05T12:00:00.000Z"
}
```

## Troubleshooting

### Erro: "DATABASE_URL must be set"
- Verifique se o arquivo `.env` existe na raiz do projeto
- Confirme que a variável `DATABASE_URL` está configurada corretamente

### Erro: "ECONNREFUSED" ao conectar no banco
- Verifique se o PostgreSQL está rodando: `sudo systemctl status postgresql`
- Confirme as credenciais no `.env`
- Teste a conexão: `psql -U seu_usuario -d lp_f3`

### Erro: "Cannot find module '@shared/schema'"
- Execute `npm run check` para verificar erros TypeScript
- Verifique se os path aliases estão configurados no `tsconfig.json`

### Porta já em uso
- Mude a porta no `.env`: `PORT=3002`
- Ou encerre o processo usando a porta: `lsof -ti:3001 | xargs kill -9`

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

MIT License - veja o arquivo LICENSE para detalhes.

## Contato

F3 Partners - contato@f3partners.com.br

Link do Projeto: https://github.com/seu-usuario/lp_f3
