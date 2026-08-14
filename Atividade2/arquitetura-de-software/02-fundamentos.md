# 🧱 02 — Fundamentos de Arquitetura de Software

## Arquitetura x Design x Implementação

### Arquitetura

Trata das decisões estruturais de maior impacto.

Exemplos:

* Monólito ou microsserviços?
* SQL ou NoSQL?
* Comunicação síncrona ou assíncrona?
* Cloud ou infraestrutura local?

### Design

Trata da organização interna dos componentes.

Exemplos:

* classes;
* interfaces;
* padrões de projeto;
* módulos;
* estruturas de dados.

### Implementação

É a transformação das decisões em código.

```text
Arquitetura
     ↓
Design
     ↓
Implementação
```

---

## 🧩 Componentes

Componentes são unidades responsáveis por determinadas funções do sistema.

Exemplo:

```text
Sistema
├── Autenticação
├── Usuários
├── Produtos
├── Pedidos
└── Pagamentos
```

---

## 🔗 Dependências

Uma dependência acontece quando um componente precisa de outro.

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

Um dos objetivos de uma boa arquitetura é controlar essas dependências.

---

## 🔄 Acoplamento

Acoplamento representa o grau de dependência entre componentes.

### Alto acoplamento

```text
A → B → C → D → E
```

Uma alteração pode provocar várias outras.

### Baixo acoplamento

```text
A → Interface
B → Interface
C → Interface
```

Os componentes possuem maior independência.

---

## 🧠 Coesão

Coesão representa o quanto as responsabilidades de um componente estão relacionadas.

Um módulo deve possuir responsabilidades relacionadas.

### Exemplo ruim

```text
UsuarioService
├── Login
├── GerarPDF
├── CalcularFrete
├── EnviarEmail
└── ProcessarPagamento
```

### Exemplo melhor

```text
UsuarioService
├── CriarUsuario
├── AtualizarUsuario
└── BuscarUsuario
```

---

## ⚖️ Acoplamento x Coesão

Uma arquitetura geralmente busca:

```text
Alta coesão
     +
Baixo acoplamento
     ↓
Maior manutenibilidade
```

---

## 📌 Princípio fundamental

> Componentes devem ter responsabilidades claras e dependências controladas.
