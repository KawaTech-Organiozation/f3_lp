# PLANO DE AUDITORIA: Revisão de Identidade Visual F3 Partners

**Data:** 2026-01-15
**Agente:** AGENT_AUDITOR
**Status:** PROPOSTA - APROVADO
**Versão:** 1.0

---

## 1. RESUMO EXECUTIVO

### 1.1 Solicitação
Revisar e alinhar a identidade visual da Landing Page F3 Partners com o "Guia básico da marca - F3.pdf", focando em:
1. Paleta de Cores
2. Tipografia (Fontes)
3. Logo
4. Fotos das Sócias (randomização de 3 imagens)

### 1.2 Escopo
- **Ação:** AUDITORIA e PLANEJAMENTO
- **Entrega:** Plano estruturado de implementação
- **Restrição:** NÃO executar alterações de código

### 1.3 Status Atual
- ✅ Imagens locais disponíveis em `/client/public/images/`
- ⚠️ Imagens locais NÃO estão sendo utilizadas no código
- ⚠️ Código atual usa placeholders do Unsplash
- ✅ Paleta de cores F3 já implementada parcialmente
- ✅ Fontes configuradas (DM Sans + Inter)

---

## 2. ANÁLISE DETALHADA

### 2.1 PALETA DE CORES

#### 2.1.1 Cores Atuais (Implementadas)
Definidas em `/client/src/index.css` (linhas 7-52):

```css
/* F3 Partners Brand Colors */
--primary: 37 100% 48%;    /* #F59C00 - Laranja F3 */
--secondary: 200 10% 80%;  /* #C5CDD1 - Cinza F3 */
--background: 0 0% 94%;    /* #EFEFEF - Cinza claro */
--card: 0 0% 100%;         /* #FFFFFF - Branco */
```

**Paleta Oficial F3:**
| Elemento | Hex Code | HSL | Uso Principal |
|----------|----------|-----|---------------|
| Laranja Principal | `#F59C00` | 37 100% 48% | CTAs, títulos, destaques |
| Cinza Suave | `#C5CDD1` | 200 10% 80% | Backgrounds secundários, bordas |
| Branco | `#FFFFFF` | 0 0% 100% | Cards, texto em fundos escuros |
| Background | `#EFEFEF` | 0 0% 94% | Fundo geral da página |

#### 2.1.2 Verificações Necessárias
- [ ] Comparar paleta implementada com Guia da Marca (PDF)
- [ ] Verificar se há cores adicionais no guia não implementadas
- [ ] Validar tonalidades de laranja (#F59C00) e cinza (#C5CDD1)
- [ ] Checar uso de gradientes/variações permitidas
- [ ] Revisar cores de estados (hover, active, disabled)

#### 2.1.3 Arquivos Impactados
- `/client/src/index.css` (definições CSS vars)
- `/tailwind.config.ts` (mapeamento Tailwind)
- Componentes que usam cores customizadas

---

### 2.2 TIPOGRAFIA (FONTES)

#### 2.2.1 Fontes Atuais (Implementadas)
Configuradas em `/client/src/index.css` (linha 1):

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
```

**Configuração Atual:**
- **Display/Headings:** DM Sans (100-1000 weight)
- **Body/Texto:** Inter (100-900 weight)

#### 2.2.2 Verificações Necessárias
- [ ] Confirmar se DM Sans e Inter são as fontes oficiais do guia
- [ ] Verificar pesos (weights) permitidos
- [ ] Validar hierarquia tipográfica (H1-H6)
- [ ] Checar tamanhos de fonte (line-height, letter-spacing)
- [ ] Verificar se há fonte alternativa para casos especiais

#### 2.2.3 Arquivos Impactados
- `/client/src/index.css` (importação e variáveis)
- `/tailwind.config.ts` (família de fontes)
- Todos os componentes que usam `font-display` ou `font-body`

---

### 2.3 LOGOTIPOS

#### 2.3.1 Status Atual
**Arquivos Disponíveis** (em `/client/public/images/`):
- `logo.jpeg` (22 KB) - Logo principal
- `Logo_positivo.jpeg` (36 KB) - Logo para fundos escuros
- `Logo_negativo.jpeg` (36 KB) - Logo para fundos claros

**Implementação Atual:**
- ❌ Nenhum dos logos locais está sendo usado
- ⚠️ Navbar e Footer usam logo textual "F3" (div com background laranja)
- ⚠️ Não há `<img>` tag para logos

**Localização dos Logos Textuais:**
- `/client/src/pages/LandingPage.tsx`
  - Linha 26: Navbar logo (div com "F3" text)
  - Linha 52: Footer logo (div com "F3" text)

#### 2.3.2 Ações Necessárias
- [ ] **CRÍTICO:** Substituir logos textuais por imagens reais
- [ ] Implementar logo positivo no Navbar (fundo claro)
- [ ] Implementar logo negativo no Footer (fundo laranja)
- [ ] Verificar dimensões e proporções dos logos no guia
- [ ] Garantir logos responsivos (desktop/mobile)
- [ ] Adicionar fallback/alt text apropriado

#### 2.3.3 Implementação Sugerida
```tsx
// Navbar (fundo claro - usar Logo Positivo)
<img
  src="/images/Logo_positivo.jpeg"
  alt="F3 Partners Logo"
  className="h-10 w-auto"
/>

// Footer (fundo laranja - usar Logo Negativo)
<img
  src="/images/Logo_negativo.jpeg"
  alt="F3 Partners Logo"
  className="h-10 w-auto brightness-0 invert"
/>
```

#### 2.3.4 Arquivos Impactados
- `/client/src/pages/LandingPage.tsx` (linhas 26, 52)
- Possíveis componentes de navegação reutilizáveis

---

### 2.4 FOTOS DAS SÓCIAS

#### 2.4.1 Status Atual
**Arquivos Disponíveis** (em `/client/public/images/`):
- `socia_1.jpeg` (107 KB)
- `socia_2.jpeg` (69 KB)
- `socia_3.jpeg` (64 KB)

**Implementação Atual:**
- ❌ Nenhuma das fotos locais está sendo usada
- ⚠️ Seção "Quem é a F3" usa placeholder Unsplash
- 📍 **Linha 231** de `/client/src/pages/LandingPage.tsx`:
```tsx
<img
  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  alt="Parceira F3"
  className="rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto lg:mx-0"
/>
```

#### 2.4.2 Requisito: Randomização
**Solicitação do Usuário:**
> "quero neste mesmo local um random para as fotos 'socia_1, socia_2, socia_3'"

**Interpretação:**
Implementar seleção aleatória de uma das 3 fotos das sócias para exibir na seção "Quem é a F3".

#### 2.4.3 Abordagens Possíveis

**OPÇÃO A: Random no Client-Side (React State)**
```tsx
const [sociaImage] = useState(() => {
  const images = ['socia_1.jpeg', 'socia_2.jpeg', 'socia_3.jpeg'];
  const randomIndex = Math.floor(Math.random() * images.length);
  return `/images/${images[randomIndex]}`;
});

<img src={sociaImage} alt="Parceira F3" />
```
- ✅ Simples de implementar
- ⚠️ Imagem muda a cada reload da página
- ⚠️ Pode causar flash no carregamento

**OPÇÃO B: Random no Build Time (Static)**
```tsx
const SOCIA_IMAGES = ['socia_1.jpeg', 'socia_2.jpeg', 'socia_3.jpeg'];
const RANDOM_SOCIA = SOCIA_IMAGES[Math.floor(Math.random() * SOCIA_IMAGES.length)];

<img src={`/images/${RANDOM_SOCIA}`} alt="Parceira F3" />
```
- ✅ Sem flash no carregamento
- ⚠️ Mesma imagem para todos os visitantes até rebuild
- ✅ Melhor para SEO/performance

**OPÇÃO C: Rotação Baseada em Tempo/Data**
```tsx
const getSociaImage = () => {
  const images = ['socia_1.jpeg', 'socia_2.jpeg', 'socia_3.jpeg'];
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return `/images/${images[dayOfYear % images.length]}`;
};
```
- ✅ Previsível (mesma imagem no mesmo dia)
- ✅ Rotação automática diária
- ⚠️ Mais complexo

**OPÇÃO D: Carrossel/Slider (Todas as 3 Fotos)**
```tsx
// Exibir as 3 fotos em carrossel
<Swiper>
  <SwiperSlide><img src="/images/socia_1.jpeg" /></SwiperSlide>
  <SwiperSlide><img src="/images/socia_2.jpeg" /></SwiperSlide>
  <SwiperSlide><img src="/images/socia_3.jpeg" /></SwiperSlide>
</Swiper>
```
- ✅ Exibe todas as sócias
- ✅ Mais rico visualmente
- ⚠️ Requer biblioteca adicional
- ⚠️ Altera layout original

#### 2.4.4 Recomendação
**Opção B (Random no Build Time)** para LP estática, OU **Opção C (Rotação Diária)** se quiser variedade sem flash de carregamento.

**Se interpretação for "exibir as 3 fotos simultaneamente":**
- Modificar layout para grid 3-colunas ou carrossel

#### 2.4.5 Arquivos Impactados
- `/client/src/pages/LandingPage.tsx` (linha 231)
- Possível utilitário helper em `/client/src/lib/utils.ts`

---

## 3. ANÁLISE DO GUIA DA MARCA

### 3.1 Documentos Disponíveis
- ✅ `/docs/LP F3.pdf` - Layout da landing page
- ⚠️ `/docs/Guia básico da marca - F3.pdf` - **VERIFICAR ENCODING**

### 3.2 Informações Extraídas do LP F3.pdf
Do documento fornecido, identificamos:

#### Cores Visíveis
- 🟠 **Laranja F3** - Cor primária predominante
- ⚪ **Branco/Cinza claro** - Backgrounds
- 🔵 **Azul/Cinza** - Elementos secundários (vistos em cards)

#### Tipografia
- Títulos em negrito com peso alto
- Hierarquia clara (H1 > H2 > H3 > Body)

#### Logos
- Logo "F3" aparece em contextos de fundo claro e escuro
- Variações positivo/negativo confirmadas

### 3.3 Gaps de Informação
**NECESSÁRIO VERIFICAR NO "Guia básico da marca - F3.pdf":**
- [ ] Especificações exatas de cores (Pantone, CMYK, RGB, Hex)
- [ ] Famílias tipográficas oficiais e alternativas
- [ ] Regras de uso do logo (espaçamento, tamanhos mínimos)
- [ ] Guidelines de fotografia (filtros, tratamento de imagens)
- [ ] Elementos gráficos adicionais permitidos
- [ ] Tom de voz e personalidade da marca

**AÇÃO MANUAL REQUERIDA:**
O arquivo "Guia básico da marca - F3.pdf" tem encoding UTF-8 não-padrão no nome. Sugerimos:
1. Renomear para `Guia_basico_marca_F3.pdf` (ASCII simples)
2. Ou fornecer conteúdo via extração manual

---

## 4. PLANO DE IMPLEMENTAÇÃO

### FASE 1: VALIDAÇÃO E ANÁLISE (CONCLUÍDO ✅)
- [x] Mapear estado atual do código
- [x] Identificar uso de cores, fontes, logos e imagens
- [x] Localizar arquivos de assets disponíveis
- [x] Documentar gaps e inconsistências

### FASE 2: EXTRAÇÃO DE DIRETRIZES DO GUIA DA MARCA
**Responsável:** Humano ou Agent com acesso ao PDF

**Tarefas:**
- [ ] Abrir "Guia básico da marca - F3.pdf"
- [ ] Extrair paleta de cores oficial:
  - Cores primárias (Hex, RGB, HSL)
  - Cores secundárias
  - Cores de suporte/acento
- [ ] Extrair especificações tipográficas:
  - Família de fonte primária
  - Família de fonte secundária
  - Pesos e estilos permitidos
  - Tamanhos e hierarquia (H1-H6, body, caption)
- [ ] Extrair guidelines de logo:
  - Variações oficiais (positivo, negativo, monocromático)
  - Área de respiro/segurança
  - Tamanhos mínimos
  - Usos proibidos
- [ ] Extrair guidelines de fotografia:
  - Estilo de imagens (corporativo, casual, etc.)
  - Tratamento de cor/filtros
  - Composição e enquadramento

**Entrega:** Documento `BRAND_GUIDELINES_SUMMARY.md`

### FASE 3: COMPARAÇÃO E IDENTIFICAÇÃO DE DIVERGÊNCIAS
**Dependência:** FASE 2 concluída

**Tarefas:**
- [ ] Comparar paleta implementada vs. guia oficial
  - Identificar cores divergentes
  - Listar cores faltantes
- [ ] Comparar fontes implementadas vs. guia oficial
  - Validar DM Sans e Inter
  - Verificar pesos e estilos
- [ ] Validar uso de logos
  - Confirmar variações positivo/negativo
  - Checar contextos de uso
- [ ] Analisar tratamento de fotos das sócias
  - Verificar se há filtros/ajustes necessários
  - Validar composição e crop

**Entrega:** Documento `GAP_ANALYSIS.md` com tabela de divergências

### FASE 4: PLANO DE CORREÇÃO TÉCNICA
**Dependência:** FASE 3 concluída

**Tarefas:**
- [ ] Criar issues/tarefas para cada divergência
- [ ] Priorizar correções (crítico, importante, nice-to-have)
- [ ] Definir ordem de implementação
- [ ] Estimar esforço técnico

**Entrega:** Documento `IMPLEMENTATION_ROADMAP.md`

### FASE 5: IMPLEMENTAÇÃO (NÃO FAZER AGORA - AGUARDAR APROVAÇÃO)
**Dependência:** Aprovação do usuário

#### 5.1 Correção de Paleta de Cores
**Arquivos:**
- `/client/src/index.css`
- `/tailwind.config.ts`

**Ações:**
```css
/* Exemplo de correção */
:root {
  --primary: [HSL_DO_GUIA];
  --secondary: [HSL_DO_GUIA];
  /* ... outras correções */
}
```

#### 5.2 Correção de Tipografia
**Arquivos:**
- `/client/src/index.css`

**Ações:**
```css
/* Se guia especificar outras fontes */
@import url('[NOVA_FONTE_GOOGLE_FONTS]');

:root {
  --font-display: '[FONTE_OFICIAL]', sans-serif;
  --font-body: '[FONTE_OFICIAL_BODY]', sans-serif;
}
```

#### 5.3 Implementação de Logos
**Arquivos:**
- `/client/src/pages/LandingPage.tsx` (linhas 26, 52)

**Ações:**
```tsx
// Navbar - Logo Positivo
<img
  src="/images/Logo_positivo.jpeg"
  alt="F3 Partners Logo"
  className="h-10 w-auto"
  loading="eager"
/>

// Footer - Logo Negativo
<img
  src="/images/Logo_negativo.jpeg"
  alt="F3 Partners Logo"
  className="h-10 w-auto filter brightness-0 invert"
  loading="lazy"
/>
```

#### 5.4 Implementação de Fotos das Sócias (Randomização)
**Arquivos:**
- `/client/src/pages/LandingPage.tsx` (linha 231)
- `/client/src/lib/utils.ts` (novo helper)

**Abordagem Recomendada: Rotação Diária**

**Passo 1:** Criar helper em `/client/src/lib/utils.ts`
```typescript
/**
 * Retorna uma foto de sócia baseada em rotação diária
 * Garante que a mesma foto seja exibida durante todo o dia
 */
export function getDailySociaImage(): string {
  const images = ['socia_1.jpeg', 'socia_2.jpeg', 'socia_3.jpeg'];

  // Calcular dia do ano (1-365)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Selecionar imagem baseada no dia
  const index = dayOfYear % images.length;
  return `/images/${images[index]}`;
}
```

**Passo 2:** Usar no componente LandingPage
```tsx
import { getDailySociaImage } from "@/lib/utils";

export default function LandingPage() {
  const sociaImage = getDailySociaImage();

  return (
    // ...
    <img
      src={sociaImage}
      alt="Parceira F3"
      className="rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto lg:mx-0"
    />
    // ...
  );
}
```

**Alternativa: Random Puro (Client-Side)**
```tsx
const [sociaImage] = useState(() => {
  const images = ['socia_1.jpeg', 'socia_2.jpeg', 'socia_3.jpeg'];
  const randomIndex = Math.floor(Math.random() * images.length);
  return `/images/${images[randomIndex]}`;
});
```

**Alternativa: Exibir Todas as 3 (Carrossel)**
- Requer biblioteca como Swiper ou Embla Carousel
- Modificação maior do layout

#### 5.5 Otimização de Imagens
**Tarefas:**
- [ ] Converter JPEGs para WebP (melhor compressão)
- [ ] Gerar versões responsivas (srcset)
- [ ] Adicionar lazy loading
- [ ] Otimizar dimensões para uso real

**Ferramentas Sugeridas:**
```bash
# Converter para WebP
cwebp -q 80 socia_1.jpeg -o socia_1.webp

# Ou usar sharp (Node.js)
npm install sharp
```

#### 5.6 Outras Imagens Externas
**Decisão Necessária:** Substituir Unsplash por imagens próprias?

**Imagens Unsplash Atuais:**
1. Hero Section (linha 139) - "Business Strategy"
2. Sobre F3 (linha 304) - "Team working together"
3. Textura de background (linha 275) - Pattern

**Opções:**
- Manter Unsplash (sem custo de licenciamento)
- Substituir por fotos próprias da F3
- Usar banco de imagens pago (Adobe Stock, Shutterstock)

---

## 5. ESTRUTURA DE ARQUIVOS IMPACTADOS

### 5.1 Arquivos a Modificar
```
/client/src/
├── index.css                    # Cores e fontes (FASE 5.1, 5.2)
├── pages/
│   └── LandingPage.tsx          # Logos e fotos (FASE 5.3, 5.4)
└── lib/
    └── utils.ts                 # Helper de randomização (FASE 5.4)

/tailwind.config.ts              # Config Tailwind (FASE 5.1, 5.2)

/client/public/images/           # Assets (já existentes)
├── logo.jpeg
├── Logo_positivo.jpeg
├── Logo_negativo.jpeg
├── socia_1.jpeg
├── socia_2.jpeg
└── socia_3.jpeg
```

### 5.2 Novos Arquivos (Opcionais)
```
/.Agent/.plans/
├── PLAN_001_AUDITORIA_MARCA_F3.md        # Este documento
├── BRAND_GUIDELINES_SUMMARY.md           # FASE 2
├── GAP_ANALYSIS.md                       # FASE 3
└── IMPLEMENTATION_ROADMAP.md             # FASE 4

/docs/
└── [Guia básico da marca - F3.pdf]       # Renomear para ASCII
```

---

## 6. RISCOS E CONSIDERAÇÕES

### 6.1 Riscos Técnicos
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Cores do guia divergem significativamente | Média | Alto | Validar com stakeholder antes de mudar |
| Fontes oficiais não são DM Sans/Inter | Baixa | Médio | Preparar fallback, testar licenciamento |
| Logos em JPEG têm qualidade baixa | Média | Médio | Solicitar versões PNG/SVG |
| Fotos das sócias precisam tratamento | Alta | Baixo | Aplicar filtros CSS ou editar em Photoshop |
| Randomização causa problemas de cache | Baixa | Baixo | Usar rotação diária em vez de random puro |

### 6.2 Considerações de Performance
- **Logos JPEG:** Converter para PNG (transparência) ou SVG (vetorial)
- **Fotos grandes:** Otimizar com WebP, srcset responsivo
- **Google Fonts:** Considerar self-hosting para GDPR/velocidade
- **Lazy Loading:** Aplicar em imagens below-the-fold

### 6.3 Considerações de Acessibilidade
- [ ] Garantir alt text descritivo em todos os logos
- [ ] Testar contraste de cores (WCAG AA)
- [ ] Validar legibilidade de fontes (tamanhos mínimos)
- [ ] Fornecer textos alternativos para fotos das sócias

### 6.4 Considerações de SEO
- [ ] Alt text otimizado ("F3 Partners Logo", "Sócia F3 [Nome]")
- [ ] Nomes de arquivo descritivos
- [ ] Lazy loading sem prejuízo a LCP (Largest Contentful Paint)
- [ ] Preload de logo principal para carregamento rápido

---

## 7. PRÓXIMOS PASSOS

### 7.1 Ação Imediata Requerida (HUMANO)
1. **Revisar este plano** e aprovar/rejeitar/ajustar
2. **Acessar "Guia básico da marca - F3.pdf"** manualmente
3. **Extrair informações** conforme FASE 2
4. **Fornecer diretrizes** ou criar `BRAND_GUIDELINES_SUMMARY.md`

### 7.2 Questões para Decisão
| # | Questão | Opções | Recomendação |
|---|---------|--------|--------------|
| 1 | Como randomizar fotos das sócias? | A) Random puro / B) Rotação diária / C) Carrossel / D) Estática | **B) Rotação diária** |
| 2 | Substituir imagens Unsplash? | A) Manter / B) Fotos próprias | **A) Manter** (sem budget para fotos) |
| 3 | Formato de logo ideal? | A) JPEG / B) PNG / C) SVG | **C) SVG** (escalável) |
| 4 | Converter imagens para WebP? | A) Sim / B) Não | **A) Sim** (melhor performance) |
| 5 | Self-host Google Fonts? | A) Sim / B) Não | **B) Não** (simplicidade) |

### 7.3 Dependências Externas
- [ ] Acesso ao conteúdo do "Guia básico da marca - F3.pdf"
- [ ] Aprovação de stakeholder para mudanças de cor/fonte
- [ ] Versões SVG dos logos (solicitar ao designer)
- [ ] Nomes/cargos das sócias para alt text

### 7.4 Cronograma Estimado (Pós-Aprovação)
| Fase | Duração Estimada | Dependências |
|------|------------------|--------------|
| FASE 2: Extração Guia | 30-60 min | Manual humano |
| FASE 3: Gap Analysis | 30 min | FASE 2 |
| FASE 4: Roadmap | 30 min | FASE 3 |
| FASE 5: Implementação | 2-4 horas | Aprovação + FASE 4 |
| Testes e QA | 1 hora | FASE 5 |
| **TOTAL** | **4-7 horas** | - |

---

## 8. CHECKLIST DE APROVAÇÃO

Antes de prosseguir para implementação, confirmar:

### 8.1 Documentação
- [x] Plano de auditoria completo e detalhado
- [ ] Guia da marca extraído e documentado (FASE 2)
- [ ] Gap analysis finalizado (FASE 3)
- [ ] Roadmap de implementação aprovado (FASE 4)

### 8.2 Decisões
- [ ] Abordagem de randomização de fotos definida
- [ ] Formato de logos aprovado (JPEG/PNG/SVG)
- [ ] Paleta de cores validada com guia oficial
- [ ] Tipografia validada com guia oficial

### 8.3 Assets
- [x] Logos disponíveis em `/client/public/images/`
- [x] Fotos das sócias disponíveis
- [ ] Versões otimizadas preparadas (WebP, etc.)
- [ ] SVG dos logos (se aplicável)

### 8.4 Aprovações
- [ ] Usuário aprovou este plano
- [ ] Stakeholder validou mudanças propostas
- [ ] Designer/Brand Manager consultado (se aplicável)

---

## 9. APÊNDICES

### APÊNDICE A: Mapeamento de Componentes por Elemento de Marca

#### A.1 Componentes que Usam Cores
```
LandingPage.tsx:
- Linha 23: bg-white/80 (navbar)
- Linha 25: text-primary (logo)
- Linha 35: bg-primary (botão CTA)
- Linha 47: bg-primary (footer background)
- Linha 93: bg-gradient-to-br from-background via-white to-secondary/50
- Linha 104: bg-blue-50 border-blue-100 text-primary
- Linha 108: text-primary (H1)
- Linha 116: bg-primary text-white (CTA)
- Linha 203: bg-secondary/30 (cards)
- Linha 274: bg-primary text-white (seção)
```

#### A.2 Componentes que Usam Fontes
```
LandingPage.tsx:
- Linha 25: font-display (logo)
- Linha 108: font-display (H1)
- Linha 89: font-sans (body)

Componentes UI:
- Button.tsx: Herda font-body
- Card.tsx: Herda font-body
- SectionHeading.tsx: Usa font-display
```

#### A.3 Componentes com Imagens
```
LandingPage.tsx:
- Linha 26: Logo textual (Navbar)
- Linha 52: Logo textual (Footer)
- Linha 139: Imagem Unsplash (Hero)
- Linha 231: Imagem Unsplash (Sócia - TARGET)
- Linha 304: Imagem Unsplash (Team)
- Linha 275: Textura background
```

### APÊNDICE B: Referências de Código Importantes

#### B.1 Variáveis CSS (index.css)
```css
/* Linhas 7-52 */
:root {
  --font-display: 'DM Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  --background: 0 0% 94%;          /* #EFEFEF */
  --foreground: 0 0% 20%;
  --primary: 37 100% 48%;          /* #F59C00 */
  --primary-foreground: 0 0% 100%;
  --secondary: 200 10% 80%;        /* #C5CDD1 */
  --secondary-foreground: 0 0% 20%;
  --accent: 37 100% 48%;           /* #F59C00 */
  --card: 0 0% 100%;               /* #FFFFFF */
  --border: 200 10% 80%;
  --ring: 37 100% 48%;
  --radius: 0.5rem;
}
```

#### B.2 Tailwind Config (tailwind.config.ts)
```typescript
/* Linhas 7-46 */
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
},
colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  // ...
}
```

### APÊNDICE C: Estrutura de Assets
```
/client/public/images/
├── logo.jpeg              # 22 KB  - Logo principal
├── Logo_positivo.jpeg     # 36 KB  - Para fundos claros
├── Logo_negativo.jpeg     # 36 KB  - Para fundos escuros
├── socia_1.jpeg          # 107 KB - Foto sócia 1
├── socia_2.jpeg          #  69 KB - Foto sócia 2
└── socia_3.jpeg          #  64 KB - Foto sócia 3

TOTAL: 334 KB
```

**Recomendações de Otimização:**
- Converter para WebP: ~40-60% redução de tamanho
- Gerar thumbnails responsivos: múltiplos tamanhos
- Usar CDN para distribuição global (opcional)

---

## 10. CONCLUSÃO

### 10.1 Resumo
Este plano de auditoria mapeou completamente o estado atual da identidade visual do projeto LP F3 Partners e identificou 4 áreas principais de trabalho:

1. ✅ **Paleta de Cores** - Parcialmente implementada, requer validação com guia oficial
2. ✅ **Tipografia** - Implementada (DM Sans + Inter), requer validação com guia oficial
3. ❌ **Logos** - NÃO implementados (usando placeholders textuais) - **CRÍTICO**
4. ❌ **Fotos das Sócias** - NÃO implementadas (usando Unsplash) - **ALTA PRIORIDADE**

### 10.2 Prioridades
**ALTA PRIORIDADE (Impacto Visual Imediato):**
1. Implementar logos reais (positivo/negativo)
2. Implementar fotos das sócias com randomização

**MÉDIA PRIORIDADE (Validação):**
3. Validar paleta de cores com guia oficial
4. Validar tipografia com guia oficial

**BAIXA PRIORIDADE (Otimização):**
5. Converter assets para WebP
6. Gerar versões SVG dos logos
7. Implementar lazy loading avançado

### 10.3 Bloqueadores
⚠️ **BLOQUEADOR CRÍTICO:** Necessário acesso ao conteúdo do "Guia básico da marca - F3.pdf" para validar cores e fontes oficiais.

**Ações para Desbloqueio:**
- Renomear PDF para encoding ASCII
- OU fornecer extração manual do conteúdo
- OU criar documento `BRAND_GUIDELINES_SUMMARY.md` com especificações

### 10.4 Entrega
Este documento constitui a **FASE 1 (Auditoria)** completa. Aguardando aprovação do usuário para prosseguir com:
- FASE 2: Extração de diretrizes do guia
- FASE 3: Gap analysis
- FASE 4: Roadmap de implementação
- FASE 5: Implementação técnica

---

**FIM DO PLANO DE AUDITORIA**

---

## ANEXO: Comandos Úteis para Implementação

### Verificar Assets
```bash
ls -lh /home/diegofurukawa/GitHub/lp_f3/client/public/images/
```

### Otimizar Imagens (WebP)
```bash
# Instalar cwebp (se necessário)
sudo apt-get install webp

# Converter JPEG para WebP
cwebp -q 80 client/public/images/logo.jpeg -o client/public/images/logo.webp
cwebp -q 80 client/public/images/socia_1.jpeg -o client/public/images/socia_1.webp
cwebp -q 80 client/public/images/socia_2.jpeg -o client/public/images/socia_2.webp
cwebp -q 80 client/public/images/socia_3.jpeg -o client/public/images/socia_3.webp
```

### Testar Implementação
```bash
# Dev server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

### Validar Acessibilidade
```bash
# Lighthouse CI (performance, acessibilidade, SEO)
npx lighthouse http://localhost:5173 --view
```

---

**Documento gerado por:** AGENT_AUDITOR
**Data:** 2026-01-15
**Versão:** 1.0
**Status:** AGUARDANDO APROVAÇÃO
