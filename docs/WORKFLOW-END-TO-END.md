# 🔄 WORKFLOW END-TO-END

> **Ciclo completo de desenvolvimento de um projeto**  
> **Do planejamento ao deploy e monitoramento**

---

## 📋 PASSO A PASSO COMPLETO

### **FASE 1: PLANEJAMENTO (Jira) - 1h**

**1.1 Criar Epic:**
```
Título: Dashboard Métricas Projetos
Key: MHF-1
Story Points: 21
Sprint: Sprint 1
Descrição: Dashboard gerencial para métricas de projetos
```

**1.2 Criar User Stories:**
```
MHF-2: Wireframe Figma (3 pts)
MHF-3: Design System (5 pts)
MHF-4: Protótipo Navegável (5 pts)
MHF-5: Setup React + Tailwind (2 pts)
MHF-6: Componentes Base (3 pts)
MHF-7: Gráficos Recharts (3 pts)
MHF-8: Deploy Vercel (1 pt)
```

**1.3 Sprint Planning:**
- Estimar com Fibonacci
- Adicionar à sprint
- Definir Definition of Done

---

### **FASE 2: MODELAGEM BPMN (Camunda) - 2h**

**2.1 Abrir Camunda Modeler:**
```
1. Novo diagrama BPMN
2. Nome: "Ciclo Dashboard Projetos"
3. Pool: Desenvolvimento
```

**2.2 Modelar Processo:**
```
Start Event
  ↓
Task: Design Figma → User Task (Assignee: Hudson)
  ↓
Gateway: Design Aprovado?
  ↓ SIM
Task: Desenvolver React
  ↓
Task: Code Review
  ↓
Gateway: Review OK?
  ↓ SIM
Task: Deploy Vercel
  ↓
End Event
```

**2.3 Salvar:**
```bash
cd docs/workflows/
# Salvar como: ciclo-dashboard-projetos.bpmn
git add .
git commit -m "docs: processo BPMN dashboard"
git push
```

---

### **FASE 3: DOCUMENTAÇÃO (Confluence) - 1h**

**3.1 Criar Página:**
```
Espaço: Mundo Hudson Full
Página: Dashboard Métricas Projetos
Template: TEMPLATE-PAGINA-PROJETO.md
```

**3.2 Preencher:**
```
- Status: Em Desenvolvimento
- Epic Jira: [LINK MHF-1]
- Repository: [LINK GitHub]
- Requisitos funcionais
- Stack técnico completo
```

**3.3 Links:**
```
- Jira Epic → Confluence Page
- Confluence Page → GitHub README
```

---
### **FASE 3.5: DISCOVERY - 2h**

**DIA 04 - MANHÃ**

**Objetivo:** Rascunhar ideias e fluxo de telas ANTES de desenhar no Figma

**Ferramentas:**
- FigJam → rascunho rápido dentro do Figma
- Miro → versão elaborada, jornada do usuário

**No FigJam:**
1. Abrir Figma → New FigJam file
2. Nome: "MHF — Discovery Dashboard Métricas"
3. Listar seções do dashboard (post-its)
4. Desenhar fluxo de navegação
5. Salvar link
---

**No Miro:**
1. Abrir miro.com
2. Novo board: "MHF — Discovery Dashboard Métricas"
3. Jornada do usuário
4. Fluxo de telas elaborado
5. Salvar link


### **FASE 4: DESIGN (Figma) - 4h**

**DIA 03 - TARDE**

**4.1 Wireframe (1h):**
```
1. Novo arquivo Figma
2. Frame Desktop (1920x1080)
3. Grid: 12 colunas, gutter 20px
4. Estrutura:
   - Header (80px altura)
   - Sidebar (260px largura)
   - Content (flex)
   - Footer (60px)
5. Retângulos para KPIs, Gráficos, Tabela
6. Salvar versão: "wireframe-v1"
```

**4.2 Design System (1h):**
```
Cores:
- Primary: #3B82F6
- Secondary: #F59E0B
- Background: #0F172A
- Text: #F1F5F9

Tipografia:
- Títulos: Inter Bold 24-32px
- Body: Inter Regular 14-16px

Componentes:
- Button (Primary, Secondary)
- Card
- Input
- Badge
```

**4.3 Protótipo (2h):**
```
1. Aplicar Design System
2. Conteúdo real:
   - KPIs: 15 projetos ativos, etc
   - Gráficos com dados mock
   - Tabela com 5 projetos
3. Interações:
   - Hover: opacity 80%
   - Click: navegação
4. Conectar frames
5. Testar fluxo completo
6. Salvar: "prototype-v1"
```

**4.4 Handoff:**
```
1. Export ícones SVG
2. Copy CSS (Inspect)
3. Screenshots (PNG alta resolução)
4. Copiar link Figma
```

**4.5 Integração:**
```
1. Jira: Adicionar link Figma em MHF-2, MHF-3, MHF-4
2. Confluence: Embed protótipo na página
3. GitHub: Criar arquivo figma-link.md no projeto
4. Commit: "design: protótipo figma completo"
```

---

### **FASE 5: DESENVOLVIMENTO (React) - 6h**

**DIA 04 - MANHÃ + TARDE**

**5.1 Setup (1h):**
```bash
cd projetos
npx create-vite@latest 01-dashboard-projetos --template react
cd 01-dashboard-projetos

npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install recharts lucide-react

# Configurar Tailwind
# Testar: npm run dev
```

**5.2 Estrutura (30min):**
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── Footer.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Badge.jsx
│   └── charts/
│       ├── PieChart.jsx
│       ├── BarChart.jsx
│       └── LineChart.jsx
├── data/
│   └── mock.js
├── pages/
│   └── Dashboard.jsx
├── App.jsx
└── index.css
```

**5.3 Componentes (3h):**
```
Olhando o Figma:
1. Copiar cores do Inspect
2. Copiar espaçamentos
3. Implementar componentes
4. Testar cada um

Jira: Mover MHF-5, MHF-6 → In Progress
Commits: "feat: componente header #MHF-5"
```

**5.4 Gráficos (1.5h):**
```
1. Dados mock em /data/mock.js
2. PieChart.jsx
3. BarChart.jsx
4. LineChart.jsx
5. Integrar no Dashboard

Jira: Mover MHF-7 → In Progress
```

**5.5 Review (30min):**
```
1. Testar responsivo (F12)
2. Comparar com Figma
3. Ajustes finais
4. Commit: "feat: dashboard completo"
```

---

### **FASE 6: CODE REVIEW (GitHub) - 1h**

**6.1 Pull Request:**
```bash
git checkout -b feature/dashboard
git add .
git commit -m "feat: dashboard métricas projetos #MHF-1"
git push origin feature/dashboard

# GitHub: Criar PR
```

**6.2 Review:**
```
1. Claude: Revisar código
2. Testes manuais
3. Aprovar PR
4. Merge to main
```

**6.3 Jira:**
```
Mover MHF-2 até MHF-7 → Done
```

---

### **FASE 7: DEPLOY (Vercel) - 30min**

**7.1 Configurar Vercel:**
```bash
npm install -g vercel
vercel

# Seguir prompts
# Login com GitHub
# Deploy!
```

**7.2 URL:**
```
https://dashboard-projetos-hudsonsneves.vercel.app
```

**7.3 Atualizar:**
```
1. Jira MHF-1: Adicionar URL
2. Confluence: Adicionar link demo
3. GitHub README: Adicionar badge deploy
4. Jira: Mover MHF-8 → Done
5. Jira: Fechar Epic MHF-1
```

---

### **FASE 8: MONITORAMENTO (Power BI) - 4h**

**DIA 10**

**8.1 Criar Dashboard Power BI:**
```
1. Abrir Power BI Desktop
2. Get Data → Excel
3. Planilha com dados do projeto:
   - Tasks completadas
   - Tempo por task
   - Commits por dia
4. Criar visualizações
5. Salvar: dashboard-metricas-mhf1.pbix
```

**8.2 Integração:**
```
1. Screenshot dashboard
2. Confluence: Embed imagem
3. Commit .pbix no GitHub /power-bi/
```

---

### **FASE 9: PORTFOLIO (Web) - 30min**

**9.1 Atualizar index.html:**
```html
<div class="project-card project-featured">
  <h3>Dashboard Métricas Projetos</h3>
  
  <div class="links">
    <a href="figma-link">🎨 Design</a>
    <a href="vercel-url">💻 Demo</a>
    <a href="github-url">📁 Código</a>
    <a href="confluence-url">📖 Docs</a>
    <a href="jira-epic">📊 Jira</a>
  </div>
</div>
```

**9.2 Deploy:**
```bash
git add .
git commit -m "feat: adicionar projeto dashboard ao portfolio"
git push

# GitHub Pages atualiza automático
```

---

### **FASE 10: RETROSPECTIVA (Confluence) - 1h**

**10.1 Template Retrospectiva:**
```
O que funcionou bem?
- Design System acelerou desenvolvimento
- Figma → React workflow fluido

O que pode melhorar?
- Estimar melhor tempo de gráficos

Ações para próximo projeto:
- [ ] Buffer 20% nas estimativas
- [ ] Mais testes antes do deploy
```

**10.2 Finalização:**
```
1. Preencher retrospectiva no Confluence
2. Atualizar página do projeto (status: Concluído)
3. Jira: Epic marcado como Done
4. Commitar tudo
```

---

## ✅ CHECKLIST RESUMIDO

### **Por Projeto:**
- [ ] Epic Jira criado
- [ ] Página Confluence criada
- [ ] Processo BPMN modelado
- [ ] Design Figma completo
- [ ] Código desenvolvido
- [ ] Code review feito
- [ ] Deploy realizado
- [ ] Dashboard Power BI (se aplicável)
- [ ] Portfolio atualizado
- [ ] Retrospectiva documentada
- [ ] Todos os links funcionando

---

## 🔄 REPETIR PARA PRÓXIMO PROJETO

Este workflow é **PERPÉTUO (∞)**:
- Cada novo projeto segue o mesmo ciclo
- Templates reutilizados
- Processo melhorado continuamente
- Documentação sempre atualizada

---

**Versão:** 1.0  
**Data:** 19/02/2026  
**Próxima revisão:** Após completar primeiro projeto
