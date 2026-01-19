# Planos de Implementação - F3 Partners Landing Page

## Visão Geral
Esta pasta contém planos estruturados de auditoria e implementação para o projeto LP F3.

---

## Planos Disponíveis

### ✅ PLAN_001_AUDITORIA_MARCA_F3.md
**Status:** Aguardando Aprovação
**Data:** 2026-01-15
**Tipo:** Auditoria de Identidade Visual

**Resumo:**
Plano completo de auditoria e implementação para alinhar a Landing Page com o Guia da Marca F3, abrangendo:

1. **Paleta de Cores** - Validação e correção
2. **Tipografia** - Verificação de fontes (DM Sans, Inter)
3. **Logotipos** - Implementação de logos reais (positivo/negativo)
4. **Fotos das Sócias** - Sistema de randomização de 3 fotos

**Achados Principais:**
- ✅ Cores e fontes parcialmente implementadas
- ❌ Logos usando placeholders textuais (CRÍTICO)
- ❌ Fotos das sócias usando Unsplash em vez de assets locais
- ✅ Assets disponíveis em `/client/public/images/` mas não utilizados

**Próximos Passos:**
1. Revisar e aprovar este plano
2. Extrair informações do "Guia básico da marca - F3.pdf"
3. Executar gap analysis
4. Implementar correções

**Arquivos Impactados:**
- `/client/src/index.css` (cores, fontes)
- `/client/src/pages/LandingPage.tsx` (logos, fotos)
- `/tailwind.config.ts` (configuração)

---

## Como Usar

### Para Revisar um Plano
```bash
cat .Agent/.plans/PLAN_001_AUDITORIA_MARCA_F3.md
```

### Para Aprovar e Prosseguir
1. Revisar o conteúdo do plano
2. Responder questões em aberto (seção "Decisões")
3. Autorizar execução das fases de implementação

### Para Adicionar Novo Plano
```bash
# Criar novo arquivo no formato
.Agent/.plans/PLAN_XXX_DESCRICAO.md
```

---

## Convenções

### Nomenclatura de Planos
`PLAN_[NUM]_[CATEGORIA]_[DESCRICAO].md`

Exemplos:
- `PLAN_001_AUDITORIA_MARCA_F3.md`
- `PLAN_002_FEATURE_FORM_VALIDATION.md`
- `PLAN_003_REFACTOR_COMPONENTS.md`

### Status de Planos
- **PROPOSTA** - Aguardando revisão inicial
- **EM REVISÃO** - Sendo analisado por stakeholders
- **APROVADO** - Autorizado para implementação
- **EM PROGRESSO** - Implementação em andamento
- **CONCLUÍDO** - Implementação finalizada
- **CANCELADO** - Plano descartado

---

## Histórico

| Data | Plano | Status | Autor |
|------|-------|--------|-------|
| 2026-01-19 | PLAN-20260119-002-INTEGRACAO-GOOGLE-SHEETS | **PROPOSTA** | AGENT_AUDITOR |
| 2026-01-19 | PLAN-20260119-001-AJUSTES-VISUAIS-CORES-GRADIENTE | **CONCLUIDO** | AGENT_EXECUTOR |
| 2026-01-17 | PLAN-20260117-001-MODERNIZACAO-NOSSA-OPERACAO | Aguardando Aprovacao | AGENT_AUDITOR |
| 2026-01-15 | PLAN_001_AUDITORIA_MARCA_F3 | Aguardando Aprovacao | AGENT_AUDITOR |

---

## Contato

Para dúvidas ou sugestões sobre os planos, entre em contato com o time responsável pelo projeto.
