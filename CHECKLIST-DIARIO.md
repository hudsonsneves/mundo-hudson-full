# ✅ CHECKLIST DIÁRIO - O QUE FAZER HOJE

> **Abra TODO DIA de manhã para saber exatamente o que fazer**  
> **Marque [x] conforme completar**

---

## 📅 DIA 01/∞ - 16/02/2026 ✅ COMPLETO

**FOCO:** Setup & Estrutura

- [x] Instalar Git
- [x] Instalar Node.js
- [x] Instalar VS Code
- [x] Instalar GitHub Desktop
- [x] Instalar Camunda Modeler
- [x] Instalar Power BI Desktop
- [x] Criar estrutura MundoHudsonFull
- [x] Criar repositório GitHub
- [x] Primeiro commit
- [x] Documentação base

**RESULTADO:** Setup completo ✅

---

## 📅 DIA 02/∞ - 17/02/2026 ✅ COMPLETO

**FOCO:** Portfolio Web

- [x] Criar portfolio HTML
- [x] Adicionar foto profissional
- [x] Upload GitHub Pages
- [x] Testar URL: hudsonsneves.github.io
- [x] Compartilhar no LinkedIn
- [x] Criar dashboard com Anima (descartado)
- [ ] ~~Refatorar dashboard~~ → ADIADO DIA 03

**RESULTADO:** Portfolio publicado ✅

---

## 📅 DIA 03/∞ - 18/02/2026 🔄 HOJE

**FOCO:** Dashboard do ZERO (Código Limpo)

### MANHÃ (3-4h):

**1. Deletar Projeto Antigo:**
- [ ] Deletar pasta com código do Anima
- [ ] Criar pasta nova: `01-hudson-dashboard-clean`

**2. Setup Novo Projeto:**
```bash
cd projetos
npx create-vite@latest 01-hudson-dashboard-clean --template react
cd 01-hudson-dashboard-clean
npm install
```

**3. Instalar Dependências:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install recharts lucide-react
```

**4. Configurar Tailwind:**
- [ ] Editar `tailwind.config.js`:
```js
content: ["./index.html", "./src/**/*.{js,jsx}"]
```
- [ ] Editar `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**5. Testar:**
```bash
npm run dev
```
- [ ] Acessar http://localhost:5173
- [ ] Ver "Vite + React" na tela

### TARDE (3-4h):

**6. Criar Estrutura de Pastas:**
```
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── charts/
│       ├── PieChart.jsx
│       └── BarChart.jsx
├── data/
│   └── mock.js
├── App.jsx
└── index.css
```

**7. Criar Componentes Base:**

**Header.jsx:**
- [ ] Criar arquivo
- [ ] Código básico (título + botão)
- [ ] Estilizar com Tailwind

**Sidebar.jsx:**
- [ ] Criar arquivo
- [ ] Menu de navegação
- [ ] Ícones (lucide-react)

**App.jsx:**
- [ ] Layout flex (sidebar + conteúdo)
- [ ] Importar Header + Sidebar
- [ ] Testar no navegador

**8. Commit:**
```bash
git add .
git commit -m "feat: dashboard estrutura base limpa"
git push
```

**TEMPO ESTIMADO:** 6-8h  
**RESULTADO ESPERADO:** Dashboard estruturado rodando

---

## 📅 DIA 04/∞ - 19/02/2026 📋 PLANEJADO

**FOCO:** Gráficos + Deploy

### MANHÃ (3-4h):

**1. Dados Mock:**
- [ ] Criar `src/data/mock.js`
- [ ] Dados de exemplo (KPIs, gráficos, tabela)

**2. Gráfico de Pizza:**
- [ ] Criar `PieChart.jsx`
- [ ] Importar Recharts
- [ ] Conectar dados mock
- [ ] Testar

**3. Gráfico de Barras:**
- [ ] Criar `BarChart.jsx`
- [ ] Dados conectados
- [ ] Cores customizadas

### TARDE (2-3h):

**4. Dashboard Principal:**
- [ ] Grid de cards (KPIs)
- [ ] Grid de gráficos
- [ ] Layout responsivo

**5. Deploy Vercel:**
- [ ] Criar conta Vercel
- [ ] Conectar GitHub
- [ ] Deploy automático
- [ ] Testar URL pública

**6. Commit:**
```bash
git commit -m "feat: graficos e deploy vercel"
git push
```

**TEMPO ESTIMADO:** 5-7h

---

## 📅 DIA 05/∞ - 20/02/2026 📋 PLANEJADO

**FOCO:** LinkedIn + Currículo

### MANHÃ (2h):

**1. Atualizar LinkedIn:**
- [ ] Novo título: "Líder Técnico de Desenvolvimento"
- [ ] Seção "Projetos"
- [ ] Link portfolio
- [ ] Link dashboard Vercel

**2. Post LinkedIn:**
- [ ] Texto sobre transição
- [ ] Screenshot dashboard
- [ ] Publicar

### TARDE (2h):

**3. Currículo:**
- [ ] Versão 1: GP Tradicional
- [ ] Versão 2: Technical PM
- [ ] Export PDF
- [ ] Salvar em `/docs/curriculos/`

**TEMPO ESTIMADO:** 4h

---

## 📅 DIA 06/∞ - 21/02/2026 📋 PLANEJADO

**FOCO:** BPMN - Primeiro Processo

### MANHÃ (2h):

**1. Estudar BPMN:**
- [ ] Documentação oficial
- [ ] Perguntar Claude: "Explica BPMN com exemplos"
- [ ] Anotar conceitos

### TARDE (4h):

**2. Camunda Modeler:**
- [ ] Abrir Camunda Modeler
- [ ] Criar processo "Aprovação"
- [ ] Start Event
- [ ] User Tasks
- [ ] Gateways
- [ ] End Event
- [ ] Salvar `.bpmn`

**3. Documentar:**
- [ ] README do projeto
- [ ] Screenshot processo
- [ ] Commit + Push

**TEMPO ESTIMADO:** 6h

---

## 📅 DIA 07/∞ - 22/02/2026 📋 PLANEJADO

**FOCO:** Camunda - Automação

### FULL DAY (8h):

**1. Instalar Camunda (Docker):**
```bash
docker run -d --name camunda -p 8080:8080 camunda/camunda-bpm-platform:latest
```
- [ ] Acessar http://localhost:8080/camunda

**2. Deploy Processo:**
- [ ] Upload do `.bpmn` no Camunda
- [ ] Testar execução manual

**3. REST API:**
- [ ] Criar API Node.js/Express
- [ ] Endpoint: POST /start-process
- [ ] Integração com Camunda

**4. Frontend React:**
- [ ] Formulário de solicitação
- [ ] Botão "Iniciar Processo"
- [ ] Chamar API
- [ ] Mostrar resultado

**TEMPO ESTIMADO:** 8h

---

## 📅 DIA 08/∞ - 23/02/2026 📋 PLANEJADO

**FOCO:** Jira + Métricas

### MANHÃ (2h):

**1. Criar Projeto Jira:**
- [ ] hudsonsneves.atlassian.net
- [ ] Projeto: "Mundo Hudson Full"
- [ ] Board Kanban

**2. Configurar:**
- [ ] Colunas: To Do, In Progress, Review, Done
- [ ] WIP limits

### TARDE (2h):

**3. Épicos & Stories:**
- [ ] Criar épicos (Dashboard, BPMN, PowerBI)
- [ ] User stories com story points
- [ ] Estimar em Fibonacci

**4. Métricas:**
- [ ] Ativar Velocity Chart
- [ ] Ativar Burndown
- [ ] Ativar CFD
- [ ] Screenshots

**TEMPO ESTIMADO:** 4h

---

## 📅 DIAS 09-15 📋 (EM CONSTRUÇÃO)

**Serão preenchidos conforme você avançar!**

**DIA 09:** Power BI - Dashboard BPM  
**DIA 10:** Confluence - Documentação  
**DIA 11:** Integração BI + BPMN  
**DIA 12:** Blog - Primeiro Post  
**DIA 13:** Domínio hudsonneves.dev  
**DIA 14:** Novo Projeto (a definir)  
**DIA 15:** Review & Ajustes  

---

## 📊 COMO USAR ESTE ARQUIVO:

### TODA MANHÃ:
1. Abrir este arquivo
2. Ir no DIA atual
3. Ler o FOCO do dia
4. Seguir checklist passo a passo
5. Marcar [x] conforme completa

### TODA NOITE:
- Se completou tudo → Marcar ✅ COMPLETO no título do dia
- Se falta algo → Deixar 🔄 e continuar amanhã
- Adicionar próximo dia se necessário

---

## 🎯 REGRA DE OURO:

**SEMPRE CONSULTE:**
- Este arquivo (manhã): "O que fazer hoje?"
- PLANO-APERFEICOAMENTO.md: "Como fazer tecnicamente?"
- DIARIO.md (noite): "O que fiz hoje?"

---

**Versão:** 1.0  
**Atualização:** Diária  
**Use:** TODO DIA! 🚀
