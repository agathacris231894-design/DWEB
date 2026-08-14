# 🧩 05 — Padrões Arquiteturais

Padrões arquiteturais são soluções reutilizáveis para problemas recorrentes de estrutura de sistemas.

---

## API Gateway

Centraliza o acesso aos serviços.

```text
Cliente
   ↓
API Gateway
├── Serviço A
├── Serviço B
└── Serviço C
```

Pode realizar:

* roteamento;
* autenticação;
* rate limiting;
* agregação;
* logging.

---

## Circuit Breaker

Evita que uma falha seja propagada.

```text
Serviço A
   ↓
Circuit Breaker
   ↓
Serviço B
```

Estados:

```text
CLOSED
  ↓
OPEN
  ↓
HALF-OPEN
```

---

## Retry

Executa novamente uma operação que falhou temporariamente.

Boas práticas:

* limitar tentativas;
* utilizar backoff;
* utilizar jitter.

---

## Bulkhead

Isola recursos para limitar o impacto de falhas.

```text
Sistema
├── Pool A
└── Pool B
```

Se o Pool A apresentar problemas, o Pool B pode continuar funcionando.

---

## Saga

Coordena transações distribuídas.

```text
Criar pedido
     ↓
Reservar estoque
     ↓
Processar pagamento
     ↓
Confirmar pedido
```

Se ocorrer uma falha, ações compensatórias podem desfazer etapas anteriores.

---

## CQRS

**Command Query Responsibility Segregation**

Separa operações de escrita e leitura.

```text
             Sistema
             /     \
            ↓       ↓
       Commands   Queries
          ↓          ↓
       Write DB   Read DB
```

---

## Event Sourcing

Armazena eventos em vez de somente o estado final.

```text
Evento 1
   ↓
Evento 2
   ↓
Evento 3
   ↓
Estado atual
```

Exemplo:

```text
Conta criada
    ↓
+ R$ 500
    ↓
- R$ 100
    ↓
+ R$ 200
    ↓
Saldo = R$ 600
```

---

## 📌 Importante

Padrões são ferramentas.

Não devem ser utilizados simplesmente porque são populares.

> O padrão deve resolver um problema real.
