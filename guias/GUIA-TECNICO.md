# 📚 GUIA TÉCNICO — MUNDO HUDSON FULL

> **Documento vivo de referência técnica**
> Atualizado à medida que novos conceitos são aprendidos e validados
> Criado: 27/02/2026 — DIA 04

---

## 🗺️ WORKFLOW COMPLETO — FIGMA vs MIRO (Do Zero ao Publicado)

| Fase | FigJam (Figma) | Miro | Do Zero (aprender) | Acelerador (mercado) |
|---|---|---|---|---|
| **Discovery** | Post-its, personas, KPIs | Post-its, personas, KPIs | Na mão, sem IA | Claude / ChatGPT |
| **UX — User Journey** | Jornada do usuário | Jornada do usuário | Na mão | Claude sugere etapas |
| **UX — Wireframe** | Figma (frames, grid) | Miro (wireframe nativo) | Na mão | Claude sugere estrutura |
| **UI — Design System** | Figma (cores, tipografia) | Miro (referência visual) | Na mão | Figma AI / Claude |
| **UI — Protótipo** | Figma (navegável) | Miro (fluxo interativo) | Na mão | Figma Dev Mode |
| **Handoff** | Inspect CSS, SVG | Export PNG/PDF | Na mão | Figma Dev Mode (CSS auto) |
| **Front-end** | React + Vite + Tailwind | React + Vite + Tailwind | VS Code na mão | V0.dev (Figma→React) |
| **Front Avançado** | Next.js | Next.js | VS Code na mão | Cursor IDE + Copilot |
| **Back-end** | Node.js | Node.js | VS Code na mão | Cursor IDE + Copilot |
| **Review** | PR GitHub | PR GitHub | Manual | Claude revisa código |
| **Deploy** | Vercel | Vercel | Manual | GitHub Actions CI/CD |
| **Portfólio** | FigJam + Figma + demo | Miro + demo | Manual | GitHub Pages auto |

---

## 📝 OBSERVAÇÕES TÉCNICAS VALIDADAS

### UX vs UI
- **UX (User Experience)** → experiência, fluxo, jornada, wireframe. Foco no que o usuário FAZ.
- **UI (User Interface)** → visual, cores, tipografia, componentes. Foco em como FICA.
- UX vem antes do UI. Sempre.

### FigJam vs Miro
- Mesmas fases, ferramentas diferentes.
- **FigJam** → times que usam Figma (startups, produto).
- **Miro** → times corporativos (grandes empresas, consultorias).
- Dominar os dois = estar pronto para qualquer empresa.
- Ambos geram links para o portfólio como entregas independentes.

### Front-end vs Back-end vs Full-stack
- **Front-end** → o que o usuário vê no navegador. React, Next.js. Dev front é especialista nisso.
- **Back-end** → roda no servidor. O usuário não vê. Processa dados, APIs, banco de dados. Node.js é a principal ferramenta back-end do ecossistema JavaScript. Dev back é especialista nisso.
- **Full-stack** → domina front E back. Objetivo do MHF.
- Existem devs especializados em cada um no mercado.

### React vs Next.js vs Node.js
- **React + Vite** → só front-end. Roda no navegador. Ponto de partida do MHF.
- **Next.js** → front-end avançado. Mesma base do React mas com recursos de servidor. Etapa 3 do MHF.
- **Node.js** → back-end puro. Roda no servidor. APIs, banco de dados.
- Next.js usa Node.js por baixo, mas são camadas diferentes.

### Do Zero → Acelerador
- **Regra de ouro:** Aprender do zero primeiro, acelerador depois.
- Do zero = entender o que está fazendo, sem depender de ferramentas.
- Acelerador = produtividade do mercado corporativo após dominar o básico.
- **Aceleradores do MHF:**
  - V0.dev → Figma para React (gratuito)
  - Cursor IDE → editor com IA integrada (trial 14 dias, dia 6+)
  - GitHub Copilot → autocomplete com IA (trial 30 dias)
  - Claude / ChatGPT → assistência em todas as fases

### Progressão de Código no MHF
```
Etapa 1: React + Vite (front-end básico)
Etapa 2: React avançado + Node.js (back-end)
Etapa 3: Next.js (full-stack)
Mercado: Cursor IDE + Copilot (produtividade acelerada)
```

---

## 🛠️ STACK COMPLETO MHF

### Design
- FigJam → discovery e brainstorming
- Miro → discovery corporativo e user journey
- Figma → wireframe, design system, protótipo navegável

### Front-end
- React + Vite → base
- Tailwind CSS → estilização
- Recharts → gráficos
- Next.js → avançado (Etapa 3)

### Back-end
- Node.js → APIs e servidor

### Aceleradores
- V0.dev → Figma → React (gratuito)
- Cursor IDE → IDE com IA (trial dia 6+)
- GitHub Copilot → autocomplete IA (trial)

### Gestão
- Jira → épicos, user stories, kanban
- Confluence → documentação
- GitHub → código + commits + PR
- GitHub Actions → CI/CD automático

### BI & Processos
- Power BI → dashboards executivos
- Camunda + Bizagi → BPMN e automação

### Deploy
- Vercel → front-end
- GitHub Pages → portfólio estático

---

## 📅 HISTÓRICO DE ATUALIZAÇÕES

| Data | DIA | O que foi adicionado |
|---|---|---|
| 27/02/2026 | DIA 04 | Tabela Figma vs Miro, conceitos UX/UI, Front/Back/Full-stack, progressão de código |

---

> **Regra:** Sempre que validar um conceito técnico novo, adicionar aqui com a data e o dia do projeto.
