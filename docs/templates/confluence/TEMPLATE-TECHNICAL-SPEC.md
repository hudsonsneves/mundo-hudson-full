# Especificação Técnica - [Projeto]

## 🎯 Objetivo
[Descrição técnica do que será construído]

## 🏗️ Arquitetura

### Estrutura de Pastas:
```
src/
├── components/
│   ├── layout/ (Header, Sidebar, Footer)
│   ├── ui/ (Button, Card, Input)
│   └── charts/ (PieChart, BarChart, LineChart)
├── data/ (mock.js)
├── pages/ (Dashboard.jsx)
└── App.jsx
```

### Fluxo de Dados:
```
Mock Data → React State → Components → UI
```

## 🛠️ Stack Técnico

**Framework:** React 18 + Vite  
**Styling:** Tailwind CSS 3  
**Charts:** Recharts  
**Icons:** Lucide React  
**Deploy:** Vercel

## 📦 Dependências

```json
{
  "react": "^18.2.0",
  "vite": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "recharts": "^2.10.0",
  "lucide-react": "^0.300.0"
}
```

## 🎨 Design System

**Cores:**
```css
--primary: #3B82F6
--secondary: #F59E0B
--background: #0F172A
--text: #F1F5F9
```

**Tipografia:**
- Títulos: Inter Bold 24-32px
- Body: Inter Regular 14-16px

**Espaçamento:** 8, 16, 24, 32, 48, 64px

## 🔌 Integrações

**Dados:**
- Mock JSON (fase 1)
- API REST (futuro)

**Deploy:**
- GitHub → Vercel (automático)
- CI/CD via GitHub Actions

## ✅ Critérios de Qualidade

- Lighthouse Performance > 90
- 100% responsivo
- Acessibilidade WCAG 2.1 AA
- Code coverage > 80% (futuro)

## 🚀 Comandos

```bash
npm install       # Instalar
npm run dev       # Desenvolvimento
npm run build     # Build produção
npm run preview   # Preview build
```
