# 🎨 GUIA: CUSTOMIZAR DASHBOARD REACT

> **Objetivo:** Transformar dashboard de alvarás em Dashboard Métricas de Projetos  
> **Tempo:** 1-2h  
> **Projeto:** MundoHudsonFull/projetos/01-hudson-dashboard

---

## 📑 ÍNDICE

- [1. Preparação](#prep)
- [2. Remover Dados Alvarás](#remover)
- [3. Criar Novos Dados](#dados)
- [4. Atualizar Componentes](#componentes)
- [5. Deploy Vercel](#deploy)
- [6. Atualizar Portfolio](#portfolio)

---

<a name="prep"></a>
## 1️⃣ PREPARAÇÃO (5 min)

### **1.1 - Backup:**
```bash
cd MundoHudsonFull/projetos
cp -r 01-hudson-dashboard 01-hudson-dashboard-BACKUP
```

### **1.2 - Abrir projeto:**
```bash
cd 01-hudson-dashboard
code .
npm run dev
```

### **1.3 - Testar:**
```
Abrir: http://localhost:5173
Verificar que está funcionando
```

---

<a name="remover"></a>
## 2️⃣ REMOVER DADOS ALVARÁS (15 min)

### **2.1 - Abrir: src/data/mock.js**

### **2.2 - DELETAR tudo sobre alvarás:**

❌ **REMOVER:**
```javascript
// Alvarás Assinados
// Alvarás Executados
// Alvarás Pendentes
// Alvarás Rejeitados
// Total Pago
// Movimentação Diária
// Status dos Alvarás
// Tipos de Alvarás
```

---

<a name="dados"></a>
## 3️⃣ CRIAR NOVOS DADOS (30 min)

### **3.1 - Criar em src/data/mock.js:**

```javascript
// KPIs Principais
export const kpisData = {
  projetosAtivos: 3,
  projetosCompletos: 2,
  emRisco: 1,
  velocityMedia: 12.5
};

// Dados Burndown
export const burndownData = [
  { dia: '01/02', planejado: 100, real: 95 },
  { dia: '05/02', planejado: 80, real: 78 },
  { dia: '10/02', planejado: 60, real: 55 },
  { dia: '15/02', planejado: 40, real: 38 },
  { dia: '20/02', planejado: 20, real: 25 },
  { dia: '25/02', planejado: 0, real: 5 }
];

// Velocity Chart
export const velocityData = [
  { sprint: 'Sprint 1', pontos: 21 },
  { sprint: 'Sprint 2', pontos: 18 },
  { sprint: 'Sprint 3', pontos: 24 },
  { sprint: 'Sprint 4', pontos: 20 }
];

// CFD (Cumulative Flow)
export const cfdData = [
  { dia: '01/02', backlog: 50, doing: 0, done: 0 },
  { dia: '05/02', backlog: 40, doing: 5, done: 5 },
  { dia: '10/02', backlog: 30, doing: 8, done: 12 },
  { dia: '15/02', backlog: 20, doing: 10, done: 20 },
  { dia: '20/02', backlog: 10, doing: 5, done: 35 }
];

// Projetos Lista
export const projetosData = [
  {
    id: 1,
    nome: 'Dashboard Hudson',
    status: 'Em Progresso',
    progresso: 75,
    prazo: '20/02/2026',
    responsavel: 'Hudson'
  },
  {
    id: 2,
    nome: 'Workflow BPMN',
    status: 'Planejado',
    progresso: 0,
    prazo: '25/02/2026',
    responsavel: 'Hudson'
  },
  {
    id: 3,
    nome: 'Dashboard Progresso',
    status: 'Em Progresso',
    progresso: 30,
    prazo: '22/02/2026',
    responsavel: 'Hudson'
  }
];

// Budget
export const budgetData = {
  planejado: 5000,
  gasto: 3200,
  disponivel: 1800
};
```

---

<a name="componentes"></a>
## 4️⃣ ATUALIZAR COMPONENTES (30 min)

### **4.1 - Atualizar Header:**

**Abrir: src/components/layout/Header.jsx**

```javascript
<h1>Dashboard Métricas de Projetos</h1>
<p>Acompanhamento em tempo real</p>
```

### **4.2 - Atualizar Cards KPI:**

**Criar: src/components/ui/KpiCard.jsx**

```javascript
import React from 'react';

export function KpiCard({ titulo, valor, icone, cor }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{titulo}</p>
          <p className={`text-3xl font-bold ${cor}`}>{valor}</p>
        </div>
        <div className="text-4xl">{icone}</div>
      </div>
    </div>
  );
}
```

### **4.3 - Atualizar Dashboard Principal:**

**Abrir: src/pages/Dashboard.jsx**

```javascript
import { kpisData, burndownData, velocityData } from '../data/mock';
import { KpiCard } from '../components/ui/KpiCard';

function Dashboard() {
  return (
    <div className="p-6">
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <KpiCard 
          titulo="Projetos Ativos" 
          valor={kpisData.projetosAtivos}
          icone="📊"
          cor="text-blue-600"
        />
        <KpiCard 
          titulo="Completos" 
          valor={kpisData.projetosCompletos}
          icone="✅"
          cor="text-green-600"
        />
        <KpiCard 
          titulo="Em Risco" 
          valor={kpisData.emRisco}
          icone="⚠️"
          cor="text-red-600"
        />
        <KpiCard 
          titulo="Velocity Média" 
          valor={kpisData.velocityMedia}
          icone="⚡"
          cor="text-purple-600"
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-2 gap-6">
        {/* Burndown */}
        <BurndownChart data={burndownData} />
        
        {/* Velocity */}
        <VelocityChart data={velocityData} />
      </div>
    </div>
  );
}
```

### **4.4 - Criar Gráfico Burndown:**

**Criar: src/components/charts/BurndownChart.jsx**

```javascript
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function BurndownChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Burndown Chart</h3>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dia" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="planejado" stroke="#94a3b8" name="Planejado" />
        <Line type="monotone" dataKey="real" stroke="#3b82f6" name="Real" />
      </LineChart>
    </div>
  );
}
```

### **4.5 - Testar:**
```bash
npm run dev
Abrir: http://localhost:5173
Verificar se mudanças aparecem
```

---

<a name="deploy"></a>
## 5️⃣ DEPLOY VERCEL (10 min)

### **5.1 - Build:**
```bash
npm run build
```

### **5.2 - Deploy:**
```bash
# Opção 1: Vercel CLI
vercel

# Opção 2: Vercel Web
# Ir em vercel.com
# New Project
# Import repo
# Deploy
```

### **5.3 - Anotar URL:**
```
✅ https://dashboard-hudson.vercel.app
```

---

<a name="portfolio"></a>
## 6️⃣ ATUALIZAR PORTFOLIO (10 min)

### **6.1 - Abrir portfolio HTML:**
```
projetos/04-portfolio-site/index.html
```

### **6.2 - Atualizar card do projeto:**
```html
<div class="project-card">
  <h3>Dashboard Métricas de Projetos</h3>
  
  <p>Dashboard gerencial com KPIs, Burndown, Velocity e CFD</p>
  
  <div class="stack">
    <span>Design: Figma</span>
    <span>Frontend: React, Vite, Tailwind, Recharts</span>
    <span>Deploy: Vercel</span>
  </div>
  
  <div class="links">
    <a href="https://dashboard-hudson.vercel.app" target="_blank">
      💻 Demo Online
    </a>
    <a href="https://github.com/hudsonsneves/mundo-hudson-full/tree/main/projetos/01-hudson-dashboard">
      📁 Código
    </a>
    <a href="https://hudsonsneves.atlassian.net/browse/MHF-1">
      📊 Jira
    </a>
  </div>
</div>
```

### **6.3 - Commit:**
```bash
git add .
git commit -m "feat: dashboard métricas projetos online"
git push
```

---

## ✅ CHECKLIST FINAL:

- [ ] Dados de alvarás removidos
- [ ] Novos dados criados (KPIs, Burndown, Velocity)
- [ ] Componentes atualizados
- [ ] Build funcional
- [ ] Deploy Vercel realizado
- [ ] URL anotada
- [ ] Portfolio atualizado
- [ ] Git commitado

---

## 🎯 RESULTADO:

✅ Dashboard profissional  
✅ URL pública: https://dashboard-hudson.vercel.app  
✅ Portfolio atualizado  
✅ Projeto completo para mostrar

**PARABÉNS! 🎉**
