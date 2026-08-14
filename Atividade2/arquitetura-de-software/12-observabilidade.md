# 👀 12 — Observabilidade

## O que é?

Observabilidade é a capacidade de compreender o estado interno de um sistema através dos dados que ele produz.

Os três sinais tradicionais são:

```text
Logs
Métricas
Traces
```

---

# Logs

Registram acontecimentos.

```text
2026-08-14 12:30
User authenticated successfully
```

---

# Métricas

Representam valores mensuráveis.

```text
CPU = 72%

Memory = 68%

Latency = 120ms

Requests = 10.000/min
```

---

# Traces

Acompanham uma requisição através de vários componentes.

```text
Frontend
   ↓
API
   ↓
Auth Service
   ↓
Order Service
   ↓
Database
```

---

# Observabilidade distribuída

É especialmente importante em microsserviços.

Uma requisição pode passar por vários serviços:

```text
Request
  ↓
Gateway
  ↓
Auth
  ↓
Orders
  ↓
Payments
  ↓
Database
```

Sem tracing, pode ser difícil descobrir onde ocorreu o problema.

---

# OpenTelemetry

OpenTelemetry é um projeto aberto voltado à instrumentação e observabilidade.

Pode trabalhar com:

* traces;
* métricas;
* logs.

Uma característica importante é a independência de fornecedor.

---

# 📌 Objetivo

Observabilidade ajuda a responder:

* O sistema está funcionando?
* Onde está o erro?
* Qual serviço está lento?
* Qual operação está consumindo mais recursos?
* O problema está aumentando?

---

# Princípio

> Não basta construir o sistema. É necessário conseguir enxergar o que está acontecendo dentro dele.
