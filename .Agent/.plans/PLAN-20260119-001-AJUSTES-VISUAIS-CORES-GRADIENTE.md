# PLAN-20260119-001: Ajustes Visuais - Cores e Gradientes

> **Status:** [x] Aprovado | [x] Pronto para execucao | [x] CONCLUIDO
> **Data de Criacao:** 2026-01-19
> **Autor:** AGENT_AUDITOR
> **Prioridade:** Media
> **Tipo:** Alteracao Visual / Estilizacao

---

## 1. Resumo Executivo

Plano de implementacao para ajustes visuais solicitados, incluindo:
1. Padronizacao da cor laranja em todo o site (`#EE6A06`)
2. Gradiente vertical no texto do HeroSection
3. Ajuste de layout no titulo da BenefitsSection
4. Estilizacao do titulo na AdministradorasSection
5. Inversao de cores na ProcessoSection

---

## 2. Objetivo

Atualizar a identidade visual da Landing Page F3, aplicando ajustes especificos de cores, gradientes e layout conforme solicitacao do usuario.

---

## 3. Analise de Impacto

### 3.1 Arquivos Afetados

| Arquivo | Tipo de Alteracao | Risco |
|---------|-------------------|-------|
| `client/src/index.css` | Alteracao de variavel CSS (--primary) | Baixo |
| `client/src/components/sections/HeroSection.tsx` | Alteracao de gradiente no titulo | Medio |
| `client/src/components/sections/BenefitsSection.tsx` | Ajuste de layout (whitespace) | Baixo |
| `client/src/components/landing/AdministradorasSection.tsx` | Estilizacao de titulo | Baixo |
| `client/src/components/landing/ProcessoSection.tsx` | Inversao de cores de fundo | Medio |
| `client/src/components/SectionHeading.tsx` | Possivel ajuste para whitespace | Baixo |

### 3.2 Dependencias

- Nenhuma dependencia externa adicional
- Alteracoes sao puramente de CSS/Tailwind

---

## 4. Detalhamento das Alteracoes

### 4.1 ITEM 1: Cor Laranja Padronizada (#EE6A06)

**Localizacao:** `client/src/index.css`

**Estado Atual:**
```css
--primary: 37 100% 48%;          /* #F59C00 */
--accent: 37 100% 48%;           /* #F59C00 */
--ring: 37 100% 48%;             /* Laranja */
```

**Estado Proposto:**
```css
/* Converter #EE6A06 para HSL */
/* #EE6A06 = RGB(238, 106, 6) = HSL(26, 95%, 48%) */
--primary: 26 95% 48%;           /* #EE6A06 */
--accent: 26 95% 48%;            /* #EE6A06 */
--ring: 26 95% 48%;              /* #EE6A06 */
```

**Impacto:** Todos os elementos que usam `bg-primary`, `text-primary`, `border-primary` serao afetados automaticamente.

---

### 4.2 ITEM 2: Gradiente no HeroSection

**Localizacao:** `client/src/components/sections/HeroSection.tsx`

**Estado Atual (linha 23-24):**
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-primary">
  F3 | Master em expansão e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">desenvolvimento</span> de parceiros.
</h1>
```

**Estado Proposto:**
O usuario solicita gradiente VERTICAL (de cima para baixo) em TODO o texto do h1, usando as seguintes cores:

```
START (Topo):
  #fd9500
  #f49600
  #f28d00
  #f18500
  #f08100
  #ef7700
  #ee7007
  #f56800
FINISH (Base)
```

**Implementacao Proposta:**
```tsx
<h1
  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6"
  style={{
    background: 'linear-gradient(to bottom, #fd9500, #f49600, #f28d00, #f18500, #f08100, #ef7700, #ee7007, #f56800)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}
>
  F3 | Master em expansao e desenvolvimento de parceiros.
</h1>
```

**Nota:** O gradiente sera aplicado a TODO o texto do h1, incluindo a palavra "desenvolvimento" que atualmente tem gradiente separado.

---

### 4.3 ITEM 3: Titulo em Linha Unica na BenefitsSection

**Localizacao:** `client/src/components/sections/BenefitsSection.tsx`

**Estado Atual (linha 9-11):**
```tsx
<SectionHeading
  title="O que entregamos aos nossos parceiros"
  centered
/>
```

**Problema Identificado:**
O titulo pode quebrar em multiplas linhas em telas menores devido ao componente `SectionHeading` ter `max-w-3xl` (linha 13 do SectionHeading.tsx).

**Decisao: Opcao A - Adicionar prop `nowrap` ao SectionHeading**

**Implementacao em SectionHeading.tsx:**
```tsx
interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  nowrap?: boolean;  // NOVA PROP
}

export function SectionHeading({ badge, title, subtitle, centered = false, light = false, nowrap = false }: SectionHeadingProps) {
  // ...
  <motion.h2
    className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-white" : "text-primary"} ${nowrap ? "whitespace-nowrap" : ""}`}
  >
```

**Uso em BenefitsSection.tsx:**
```tsx
<SectionHeading
  title="O que entregamos aos nossos parceiros"
  centered
  nowrap
/>
```

---

### 4.4 ITEM 4: Titulo da AdministradorasSection

**Localizacao:** `client/src/components/landing/AdministradorasSection.tsx`

**Estado Atual (linhas 7-9):**
```tsx
<p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
  Trabalhamos com as principais administradoras do mercado
</p>
```

**Estado Proposto:**
- Mudar de `<p>` para heading semantico (`<h2>`)
- Aplicar cor laranja do projeto (#EE6A06 / `text-primary`)
- Tamanho da fonte: **4xl** (mesmo padrao das outras sections)

```tsx
<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
  Trabalhamos com as principais administradoras do mercado
</h2>
```

**Nota:** Tamanho 4xl definido para manter consistencia com demais titulos de section.

---

### 4.5 ITEM 5: Inversao de Cores na ProcessoSection

**Localizacao:** `client/src/components/landing/ProcessoSection.tsx`

**Estado Atual (linha 14):**
```tsx
<section id="process" className="py-24 bg-secondary/30">
```

**Estado Proposto:**
Inverter para que LARANJA seja o background:

```tsx
<section id="process" className="py-24 bg-primary">
```

**Ajustes Necessarios de Contraste:**
Apos mudar o fundo para laranja, os textos internos precisam ser ajustados:

| Elemento | Estado Atual | Estado Proposto |
|----------|--------------|-----------------|
| Titulo (SectionHeading) | `text-primary` | `text-white` (usar prop `light`) |
| Cards | `bg-white` | `bg-gray-100/80` (gray com transparencia) |
| Linha conectora | `bg-border` | `bg-white/30` |
| Numeros dos steps | `bg-primary text-white` | `bg-white text-primary` |
| Titulo dos steps | default | `text-primary` |
| Descricao dos steps | `text-muted-foreground` | Manter (dentro do card cinza) |

**Implementacao Proposta:**
```tsx
<section id="process" className="py-24 bg-primary">
  <div className="container mx-auto px-4 sm:px-6">
    <SectionHeading
      title="Como voce pode se tornar parceiro:"
      centered
      light={true}  // Adicionar esta prop
    />

    <div className="relative mt-16 max-w-6xl mx-auto">
      {/* Linha conectora - ajustar cor */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 hidden md:block -z-10" />

      {/* Cards - gray com transparencia */}
      <motion.div className="bg-gray-100/80 p-6 rounded-xl border border-white/20 shadow-sm ...">
        {/* Numeros - invertidos */}
        <div className="w-12 h-12 bg-white text-primary rounded-full ...">
```

---

## 5. Criterios de Aceite

- [x] Cor laranja #EE6A06 aplicada em todos elementos que usam --primary
- [x] Gradiente vertical visivel em todo o texto do h1 no HeroSection
- [x] Titulo "O que entregamos aos nossos parceiros" exibido em linha unica
- [x] Titulo da AdministradorasSection com aparencia de heading e cor laranja
- [x] ProcessoSection com fundo laranja e contraste adequado em todos elementos
- [ ] Responsividade mantida em todos breakpoints (pendente validacao manual)
- [ ] Sem erros de console ou warnings no navegador (pendente validacao manual)

---

## 6. Riscos e Mitigacoes

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| Contraste insuficiente na ProcessoSection | Media | Alto | Testar com ferramenta de acessibilidade |
| Gradiente nao renderiza em browsers antigos | Baixa | Medio | Fallback com cor solida |
| Titulo BenefitsSection muito longo em mobile | Media | Baixo | Testar em viewport 320px |

---

## 7. Decisoes Tomadas

| Item | Questao | Decisao |
|------|---------|---------|
| 3 | Metodo para linha unica | **(A)** Adicionar prop `nowrap` ao SectionHeading |
| 4 | Tamanho da fonte do titulo | **4xl** (mesmo tamanho de todas as sections) |
| 5 | Estilo dos cards | **Gray com transparencia** (ex: `bg-gray-100/80`) |

---

## 8. Etapas de Implementacao

### Fase 1: Cor Global (Item 1)
1. Atualizar `--primary` em `index.css`
2. Verificar propagacao em todos componentes

### Fase 2: HeroSection (Item 2)
1. Remover gradiente atual do span
2. Aplicar gradiente vertical ao h1 completo
3. Testar em diferentes tamanhos de tela

### Fase 3: SectionHeading + BenefitsSection (Item 3)
1. Adicionar prop `nowrap` ao componente SectionHeading
2. Usar prop `nowrap` no BenefitsSection
3. Verificar responsividade

### Fase 4: AdministradorasSection (Item 4)
1. Alterar elemento de `<p>` para `<h2>`
2. Aplicar classes: `text-3xl md:text-4xl font-bold text-primary`

### Fase 5: ProcessoSection (Item 5)
1. Alterar fundo para `bg-primary`
2. Adicionar `light={true}` ao SectionHeading
3. Alterar cards para `bg-gray-100/80`
4. Alterar linha conectora para `bg-white/30`
5. Inverter cores dos numeros: `bg-white text-primary`
6. Testar acessibilidade e contraste

### Fase 6: Validacao Final
1. Teste visual em desktop, tablet e mobile
2. Verificar console para erros
3. Validar contraste WCAG

---

## 9. Checklist Pre-Execucao

- [ ] Plano revisado e aprovado
- [x] Questoes pendentes respondidas
- [ ] Backup do codigo atual (git)
- [ ] Ambiente de desenvolvimento disponivel

---

## Historico de Alteracoes

| Data | Versao | Descricao |
|------|--------|-----------|
| 2026-01-19 | 2.0.0 | EXECUCAO CONCLUIDA - Ver REPORT-20260119-001 |
| 2026-01-19 | 1.1.0 | Decisoes tomadas: nowrap (A), 4xl, gray/80 |
| 2026-01-19 | 1.0.0 | Criacao inicial do plano |
