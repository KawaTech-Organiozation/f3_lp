# PLAN-20260119-002: Integracao CTASection com Google Sheets

> **Status:** APROVADO
> **Data:** 2026-01-19
> **Autor:** AGENT_AUDITOR
> **Tipo:** Feature - Integracao Externa

---

## 1. Resumo Executivo

Implementar integracao do formulario de leads (CTASection/LeadForm) com Google Sheets como **unico destino de dados**, substituindo o armazenamento atual em PostgreSQL.

**Solicitacao Original:**
1. CTASection usar Google Sheets
2. Componente reutilizavel
3. Variaveis de ambiente

---

## 2. Analise do Estado Atual

### 2.1 Arquitetura Atual
```
[LeadForm] --> [fetch /api/leads] --> [server/routes.ts] --> [storage.ts] --> [PostgreSQL]
```

### 2.2 Arquitetura Nova (Pos-Implementacao)
```
[LeadForm] --> [fetch /api/leads] --> [server/routes.ts] --> [GoogleSheetsService] --> [Google Sheets]
```

### 2.3 Arquivos Envolvidos
| Arquivo | Funcao | Acao |
|---------|--------|------|
| `client/src/components/landing/CTASection.tsx` | Section que contem LeadForm | Sem alteracao |
| `client/src/components/LeadForm.tsx` | Formulario de captura | Sem alteracao |
| `client/src/hooks/use-leads.ts` | Hook de submissao | Sem alteracao |
| `server/routes.ts` | Endpoint POST /api/leads | **Modificar** |
| `server/storage.ts` | Camada de persistencia | Remover uso |
| `server/services/googleSheetsService.ts` | Service Google Sheets | **Criar** |
| `.env` / `.env.example` | Variaveis de ambiente | **Modificar** |

### 2.4 Campos do Formulario
- name (Nome Completo)
- company (Empresa)
- email (E-mail)
- phone (Telefone)
- cityState (Cidade/Estado)
- segment (Segmento de Atuacao)
- message (Mensagem)

---

## 3. Decisoes Arquiteturais - CONFIRMADAS

### DECISAO_001: Destino dos Dados
**Decisao:** Opcao A - **Google Sheets substitui PostgreSQL**

> Leads serao salvos apenas no Google Sheets. PostgreSQL nao sera mais utilizado para leads.

---

### DECISAO_002: Metodo de Integracao
**Decisao:** Opcao C - **Service Account (API Key)**

> Conta de servico para automacao server-side. Sem necessidade de refresh de tokens.

---

### DECISAO_003: Componente Reutilizavel
**Decisao:** Opcao B - **Service class no backend**

> `GoogleSheetsService` - classe reutilizavel para qualquer integracao futura com Sheets.

---

## 4. Plano de Implementacao

### Fase 1: Configuracao do Ambiente
**Objetivo:** Preparar credenciais e variaveis de ambiente

**Pre-requisitos (Usuario deve executar):**
1. Criar projeto no Google Cloud Console
2. Habilitar Google Sheets API
3. Criar Service Account e baixar JSON de credenciais
4. Criar planilha no Google Sheets e compartilhar com Service Account (Editor)

**Variaveis de Ambiente Necessarias:**
```env
# Google Sheets Integration
GOOGLE_SHEETS_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SHEETS_SHEET_NAME=Leads
```

**Arquivos Afetados:**
- `.env.example` (adicionar variaveis)
- `.env` (configurar valores - usuario)

---

### Fase 2: Instalacao de Dependencias
**Objetivo:** Adicionar pacote oficial do Google

**Comando:**
```bash
npm install googleapis
```

**Arquivos Afetados:**
- `package.json`
- `package-lock.json`

---

### Fase 3: Implementacao do Service
**Objetivo:** Criar service reutilizavel para Google Sheets

**Novo Arquivo:** `server/services/googleSheetsService.ts`

**Estrutura:**
```typescript
// server/services/googleSheetsService.ts
import { google } from 'googleapis';

interface GoogleSheetsConfig {
  clientEmail: string;
  privateKey: string;
  spreadsheetId: string;
  sheetName: string;
}

export class GoogleSheetsService {
  private sheets;
  private config: GoogleSheetsConfig;

  constructor(config: GoogleSheetsConfig) {
    this.config = config;
    this.sheets = this.initializeClient();
  }

  private initializeClient() {
    const auth = new google.auth.JWT(
      this.config.clientEmail,
      undefined,
      this.config.privateKey.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );
    return google.sheets({ version: 'v4', auth });
  }

  async appendRow(values: string[]): Promise<void> {
    await this.sheets.spreadsheets.values.append({
      spreadsheetId: this.config.spreadsheetId,
      range: `${this.config.sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [values] },
    });
  }
}

// Singleton instance
export function createGoogleSheetsService(): GoogleSheetsService | null {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Leads';

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.warn('[GoogleSheets] Credenciais nao configuradas');
    return null;
  }

  return new GoogleSheetsService({
    clientEmail,
    privateKey,
    spreadsheetId,
    sheetName,
  });
}

export const googleSheetsService = createGoogleSheetsService();
```

---

### Fase 4: Modificacao da Rota de Leads
**Objetivo:** Substituir PostgreSQL por Google Sheets

**Arquivo:** `server/routes.ts`

**Alteracao:**
```typescript
import { googleSheetsService } from './services/googleSheetsService';

app.post("/api/leads", async (req, res) => {
  try {
    const data = insertLeadSchema.parse(req.body);

    if (!googleSheetsService) {
      throw new Error('Google Sheets nao configurado');
    }

    // Enviar para Google Sheets
    await googleSheetsService.appendRow([
      new Date().toISOString(),
      data.name,
      data.company,
      data.email,
      data.phone,
      data.cityState,
      data.segment,
      data.message,
    ]);

    res.status(201).json({ success: true, message: 'Lead registrado com sucesso' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Dados invalidos", errors: error.errors });
    } else {
      console.error('[Leads] Erro ao salvar:', error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
});
```

---

### Fase 5: Atualizacao de Documentacao
**Objetivo:** Documentar variaveis de ambiente

**Arquivo:** `.env.example`

**Adicionar:**
```env
# Google Sheets Integration
GOOGLE_SHEETS_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
GOOGLE_SHEETS_SHEET_NAME=Leads
```

---

## 5. Estrutura da Planilha Google Sheets

**Cabecalhos (Linha 1 - configurar manualmente):**
| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Data/Hora | Nome | Empresa | Email | Telefone | Cidade/Estado | Segmento | Mensagem |

---

## 6. Consideracoes de Seguranca

### 6.1 Protecao de Credenciais
- [x] NUNCA commitar `GOOGLE_SHEETS_PRIVATE_KEY` em codigo
- [x] Usar variaveis de ambiente em producao
- [ ] Rotacionar chaves periodicamente (responsabilidade do usuario)

### 6.2 Permissoes da Planilha
- Service Account deve ter permissao de **Editor** na planilha
- NAO compartilhar planilha publicamente

### 6.3 Validacao de Dados
- Manter validacao Zod no backend (ja existente)

---

## 7. Criterios de Aceite

- [ ] Leads submetidos aparecem na planilha Google Sheets
- [ ] Variaveis de ambiente documentadas em `.env.example`
- [ ] Service `GoogleSheetsService` reutilizavel
- [ ] Nenhuma credencial exposta no codigo
- [ ] Formulario continua funcionando para o usuario

---

## 8. Riscos e Mitigacoes

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| Rate limit Google API | Baixa | Medio | Volume esperado baixo |
| Credenciais expostas | Media | Alto | Variaveis de ambiente |
| Planilha deletada | Baixa | Alto | Backups periodicos manuais |
| Latencia de escrita | Media | Baixo | UX com loading state |

---

## 9. Checklist Pre-Execucao

- [ ] Usuario criou projeto no Google Cloud Console
- [ ] Usuario habilitou Google Sheets API
- [ ] Usuario criou Service Account e tem JSON de credenciais
- [ ] Usuario criou planilha com cabecalhos
- [ ] Usuario compartilhou planilha com Service Account (Editor)
- [x] Plano aprovado pelo usuario
- [x] Decisoes arquiteturais confirmadas

---

## 10. Proximos Passos

1. **Usuario:** Executar pre-requisitos do Google Cloud (secao 9)
2. **Usuario:** Fornecer credenciais para `.env`
3. **AGENT_EXECUTOR:** Implementar fases 1-5

---

## Historico de Alteracoes

| Data | Versao | Descricao |
|------|--------|-----------|
| 2026-01-19 | 1.1.0 | Decisoes confirmadas: Google Sheets substitui PostgreSQL |
| 2026-01-19 | 1.0.0 | Criacao inicial do plano |
