# 💻 15 — Exemplos Práticos

## Exemplo 1 — Sistema simples de alunos

Para uma aplicação pequena:

```text
Frontend
   ↓
API
   ↓
Modular Monolith
   ↓
PostgreSQL
```

Tecnologias possíveis:

* HTML;
* CSS;
* JavaScript;
* Python;
* FastAPI;
* PostgreSQL.

---

# Exemplo 2 — E-commerce

```text
                 API Gateway
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
    Usuários        Pedidos       Pagamentos
       │              │              │
       ↓              ↓              ↓
    Banco A         Banco B         Banco C
```

Pode utilizar microsserviços quando a escala e os requisitos justificarem a complexidade.

---

# Exemplo 3 — Sistema orientado a eventos

```text
Pedido criado
      ↓
Message Broker
 ┌────┼───────┐
 ↓    ↓       ↓
Email Estoque Pagamento
```

---

# Exemplo 4 — Sistema de dados

```text
CSV / APIs
     ↓
Data Pipeline
     ↓
Python / Pandas
     ↓
PostgreSQL
     ↓
API
     ↓
Dashboard
```

---

# Exemplo 5 — Projeto de portfólio

Uma arquitetura adequada para um projeto pessoal pode ser:

```text
Frontend
   ↓
FastAPI
   ↓
Service Layer
   ↓
Repository
   ↓
PostgreSQL
```

Com:

```text
Docker
GitHub
GitHub Actions
OpenTelemetry
Mermaid
```

---

# 📌 Aprendizado

Projetos de portfólio não precisam utilizar todas as tecnologias disponíveis.

É melhor demonstrar:

* boas decisões;
* organização;
* documentação;
* testes;
* Git;
* arquitetura coerente.

Do que utilizar tecnologias complexas sem necessidade.
