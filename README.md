# 📋 Desafio Kanban — FieldControl

Aplicação de gerenciamento de tarefas no estilo Kanban, com suporte a múltiplos boards, drag-and-drop e persistência total de dados.

---

## ✨ Funcionalidades

- **Multi-Board System** — Criação de múltiplos boards (quadros)
- **Drag and Drop** — Gestão de colunas e tasks arrastando entre elas
- **Task Tracking** — Criação de tasks com título e data limite de conclusão
- **Persistência Total** — Ordem das colunas e tasks salva no banco de dados
- **Interface Minimalista** — Interface clara e simples, inspirada no Notion

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Frontend | Angular 21 + Angular CDK |
| Backend | NestJS 10 + Express |
| ORM | Prisma 6 |
| Banco de Dados | PostgreSQL + Docker |
| Linguagem | TypeScript (fullstack) |
| Testes | Jest + Supertest |

### Por que cada tecnologia?

**Backend — NestJS**
Arquitetura modular facilita a organização em módulos independentes (boards, columns, tasks). Decorators e injeção de dependência tornam o código mais legível e testável.

**Frontend — Angular 21**
Estrutura sólida para SPAs. O Angular CDK foi utilizado para o drag-and-drop nativo de colunas e tasks, sem bibliotecas externas.

**ORM — Prisma 6**
Sintaxe simples com type-safety de ponta a ponta. Queries intuitivas e migrations versionadas facilitam a persistência da ordenação de colunas e tasks.

**Banco de Dados — PostgreSQL + Docker**
Robustez relacional com compatibilidade nativa ao Prisma. Via Docker, o ambiente fica isolado e replicável em qualquer máquina.

**Testes — Jest**
Testes unitários e e2e no backend. Os testes e2e cobrem o fluxo completo: criação de board, coluna, task e validação de erro em coluna inexistente.

---

## 🏗️ Arquitetura

### Banco de Dados

```prisma
model Board {
  id        String   @id @default(uuid())
  title     String
  columns   Column[]
  createdAt DateTime @default(now())
}

model Column {
  id        String   @id @default(uuid())
  title     String
  order     Int
  tasks     Task[]
  createdAt DateTime @default(now())
  boardId   String
  board     Board    @relation(fields: [boardId], references: [id], onDelete: Cascade)
}

model Task {
  id          String   @id @default(uuid())
  title       String
  order       Int
  limitDate   DateTime
  createdAt   DateTime @default(now())
  columnId    String
  column      Column   @relation(fields: [columnId], references: [id], onDelete: Cascade)
}
```

### Backend (API) — NestJS

```
src/
├── app.module.ts         # Módulo principal, reúne e inicializa todos os módulos
├── board/                # Módulo de boards (DTOs, service, controller, module)
├── column/               # Módulo de columns (+ DTO de reorder)
└── task/                 # Módulo de tasks (+ DTO de reorder)
```

### Frontend — Angular

```
src/app/
├── components/
│   ├── board/            # Componente do board (template, estilos, spec)
│   ├── column/           # Componente de coluna
│   ├── task/             # Componente de task
│   └── sidebar/          # Navegação entre boards
├── models/
│   ├── board.model.ts
│   ├── column.model.ts
│   ├── column-reorder.model.ts
│   ├── task.model.ts
│   └── task-reorder.model.ts
└── services/
    ├── board.ts           # Comunicação com a API de boards
    ├── column.ts
    └── task.ts
```

---

## 🔌 Endpoints

### Board
| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/boards` | Lista todos os boards |
| `GET` | `/boards/:boardId` | Busca um board pelo ID |
| `POST` | `/boards` | Cria um novo board |
| `PATCH` | `/boards/:boardId` | Atualiza os dados de um board |
| `DELETE` | `/boards/:boardId` | Remove um board |

### Column
| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/boards/:boardId/columns` | Lista todas as colunas de um board |
| `GET` | `/boards/:boardId/columns/:id` | Busca uma coluna pelo ID |
| `POST` | `/boards/:boardId/columns` | Cria uma coluna em um board |
| `PATCH` | `/boards/:boardId/columns/reorder` | Reordena as colunas dentro de um board |
| `PATCH` | `/boards/:boardId/columns/:id` | Atualiza os dados de uma coluna |
| `DELETE` | `/boards/:boardId/columns/:id` | Remove uma coluna |

### Task
| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/boards/:boardId/columns/:columnId/tasks` | Lista todas as tasks de uma coluna |
| `GET` | `/boards/:boardId/columns/:columnId/tasks/:id` | Busca uma task pelo ID |
| `POST` | `/boards/:boardId/columns/:columnId/tasks` | Cria uma task em uma coluna |
| `PATCH` | `/boards/:boardId/columns/:columnId/tasks/reorder` | Reordena ou move uma task entre colunas |
| `PATCH` | `/boards/:boardId/columns/:columnId/tasks/:id` | Atualiza os dados de uma task |
| `DELETE` | `/boards/:boardId/columns/:columnId/tasks/:id` | Remove uma task |

---

## ✅ Validação de Dados

A validação é feita com `class-validator` e `class-transformer` via `ValidationPipe` global com `whitelist: true` e `forbidNonWhitelisted: true`.

| DTO | Campo | Regras |
|---|---|---|
| Board | `title` | obrigatório, string, 3–50 caracteres, trim automático |
| Column | `title` | obrigatório, string, 3–50 caracteres, trim automático |
| Column Reorder | `columnId` | obrigatório, string |
| Column Reorder | `fromOrder` / `toOrder` | obrigatório, inteiro |
| Task | `title` | obrigatório, string, 3–50 caracteres, trim automático |
| Task | `limitDate` | obrigatório, formato ISO 8601 (`IsDateString`) |
| Task Reorder | `taskId`, `fromColumnId`, `toColumnId` | obrigatório, string |
| Task Reorder | `fromOrder` / `toOrder` | obrigatório, inteiro, parse automático via `Transform` |

---

## 🖱️ Drag and Drop — Angular CDK

A implementação é dividida em dois níveis:

**Reordenação de Colunas**
O `BoardComponent` define um `cdkDropList` horizontal envolvendo todas as colunas. Cada `<app-column>` recebe `cdkDrag`. Ao soltar, o `dropColumn()`:
1. Atualiza a ordem visual via `moveItemInArray`
2. Monta o `ReorderColumnDto` com `columnId`, `fromOrder` e `toOrder`
3. Persiste a nova ordem no banco via service

**Movimentação de Tasks**
Cada coluna é um `cdkDropList` conectado às demais via `[cdkDropListConnectedTo]="allColumnIds"`, permitindo mover tasks entre colunas. Ao soltar, o `dropTask()`:
1. Detecta se é na mesma coluna (`moveItemInArray`) ou entre colunas (`transferArrayItem`)
2. Monta o `ReorderTaskDto` com `taskId`, `fromColumnId`, `toColumnId`, `fromOrder` e `toOrder`
3. Persiste a movimentação no banco

**Conflito de Drag**
O `cdkDragHandle` no header da coluna restringe a área de arrasto. Nas tasks, `(mousedown)="$event.stopPropagation()"` impede que o drag da task acione o da coluna pai.

---

## 🎨 Interface

Estética minimalista inspirada no Notion — off-whites (`#f7f7f5`), bordas sutis (`#e8e8e4`) e textos em cinza escuro. Botões de ação ficam ocultos e aparecem no hover, mantendo a interface limpa. Ações destrutivas recebem feedback em vermelho. Task cards simulam elevação com `box-shadow` no hover e cursor `grab`.

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js instalado
- Docker Desktop aberto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/kanban.git
cd kanban
```

### 2. Configure o `docker-compose.yml`

```yaml
services:
  db:
    image: postgres:15
    container_name: kanban_db
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: kanban
    ports:
      - "5432:5432"
```

> Dados de exemplo — altere as credenciais se necessário.

### 3. Suba o container

```bash
docker compose up -d
```

### 4. Configure e inicie a API

```bash
cd backend
npm install
```

No arquivo `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/kanban"
```

```bash
npx prisma migrate dev
npm run start:dev
```

> API disponível em `http://localhost:3000`

### 5. Inicie o Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm start
```

> Aplicação disponível em `http://localhost:4200`

---
## 🚀 Como acessar online
https://kanban-joao-marcelo.netlify.app/
(Entre no site, aguarde 2 ou 3 minutos e recarregue para funcionar
o render demora para iniciar.)

## 🧪 Como rodar os testes

Certifique-se de que o container do banco está ativo:

```bash
docker compose up -d
```

**Testes unitários**
```bash
cd backend
npm run test
```

**Testes e2e**
```bash
npm run test:e2e
```

**Cobertura de testes**
```bash
npm run test:cov
```

> O relatório de cobertura é gerado na pasta `coverage/` dentro do backend.

---

## 💭 Considerações

A necessidade de trabalhar com ordenação de colunas e tasks, mantendo esse estado persistido no banco, trouxe novas formas de pensar sobre adaptabilidade e consistência de dados. Garantir que a ordem refletida na interface seja sempre a mesma após um recarregamento exigiu cuidado no design do schema e na lógica dos services de reordenação, indo além de um CRUD tradicional.

Implementar o reorder seja em columns ou tasks, foi um exercício mental que me fez pensar além da simples persistência. Quando editamos a ordem de uma coluna ou task, as outras também mudam de lugar. Conseguir implementar essa lógica e ver funcionando foi muito recompensador.