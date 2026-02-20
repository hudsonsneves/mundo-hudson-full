# Configuração Completa do Jira

## 📊 Criar Projeto

1. **Acessar:** hudsonsneves.atlassian.net
2. **Projects** → **Create project**
3. **Template:** Kanban
4. **Nome:** Mundo Hudson Full
5. **Key:** MHF
6. **Create**

---

## 🎯 Configurar Board

### Colunas do Board:

1. **Backlog** (não conta para WIP)
2. **To Do** (não conta para WIP)
3. **In Progress** (WIP limit: 3)
4. **Code Review** (WIP limit: 2)
5. **Testing** (WIP limit: 2)
6. **Done**

### Como configurar:
1. Board → ⚙️ **Board settings**
2. **Columns** → Adicionar/editar
3. **WIP limits** → Definir limites

---

## 📏 Configurar Estimation

### Fibonacci Scale:
- 1 pt = ~1h (tarefa muito simples)
- 2 pts = ~2h (tarefa simples)
- 3 pts = ~4h (tarefa média)
- 5 pts = ~1 dia (tarefa complexa)
- 8 pts = ~2 dias (feature média)
- 13 pts = ~3 dias (feature grande)

### Como configurar:
1. **Project settings** → **Estimation**
2. Selecionar **Story points**
3. Usar escala Fibonacci

---

## 📊 Ativar Métricas Ágeis

### Velocity Chart:
1. **Reports** → **Velocity chart**
2. Mostra story points por sprint

### Burndown Chart:
1. **Reports** → **Burndown chart**
2. Mostra progresso diário da sprint

### Cumulative Flow Diagram (CFD):
1. **Reports** → **Cumulative flow diagram**
2. Visualiza distribuição de trabalho por coluna

### Control Chart:
1. **Reports** → **Control chart**
2. Mostra cycle time e lead time

---

## 🏷️ Criar Labels

**Labels úteis:**
- `frontend` - Trabalho de frontend
- `design` - Trabalho de design
- `docs` - Documentação
- `bug` - Correção de bug
- `enhancement` - Melhoria
- `urgent` - Urgente

---

## 🎯 Criar Épicos Iniciais

### Epic 1: Dashboard Métricas Projetos
- Key: MHF-1
- Story Points: 21
- User Stories: MHF-2 até MHF-8

### Epic 2: Workflow BPMN
- Key: MHF-9
- Story Points: 13
- User Stories: MHF-10 até MHF-14

### Epic 3: Dashboard Progresso
- Key: MHF-15
- Story Points: 18
- User Stories: MHF-16 até MHF-21

---

## 🔗 Integração com GitHub

1. **Project settings** → **Integrations**
2. Conectar **GitHub**
3. Mencionar issues nos commits: `#MHF-5`
4. Jira atualiza automaticamente

---

## ⚙️ Automações Úteis

### Auto-mover para Done:
**Quando:** PR merged no GitHub  
**Então:** Mover card para Done

### Notificar no Slack (futuro):
**Quando:** Card movido para Review  
**Então:** Notificar canal #desenvolvimento

---

## 📋 Checklist Diário

**Manhã:**
- [ ] Abrir Jira board
- [ ] Verificar cards In Progress
- [ ] Mover cards para colunas corretas

**Durante o dia:**
- [ ] Atualizar cards conforme trabalha
- [ ] Comentar bloqueios se houver

**Noite:**
- [ ] Mover cards completados para Done
- [ ] Verificar se WIP limits estão OK

---

## 🎯 Definition of Done (Projeto)

No **Project settings**, definir:

**Done quando:**
- [ ] Código desenvolvido e commitado
- [ ] Code review aprovado
- [ ] Testes manuais OK
- [ ] Deploy em produção
- [ ] Documentação atualizada
- [ ] User story marcada como Done

---

## 📊 Usar Métricas

**Semanalmente, revisar:**
- Velocity (média últimas 3 sprints)
- Burndown (está no ritmo?)
- CFD (algum gargalo?)
- Cycle time (quanto tempo To Do → Done?)

**Ajustar processo baseado nos dados!**
