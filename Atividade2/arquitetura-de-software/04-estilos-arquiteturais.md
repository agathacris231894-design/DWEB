# 🏛️ 04 — Estilos Arquiteturais

## 1. Arquitetura Monolítica

Toda a aplicação é implantada como uma unidade.

```text
┌──────────────────────┐
│     Aplicação        │
│                      │
│ Usuários             │
│ Pedidos              │
│ Pagamentos           │
│ Relatórios           │
└──────────┬───────────┘
           ↓
      Banco de Dados
```

### Vantagens

* simplicidade;
* menor complexidade operacional;
* desenvolvimento inicial rápido;
* implantação simples.

### Desvantagens

* pode aumentar o acoplamento;
* deploy da aplicação inteira;
* escalabilidade menos granular.

---

# 2. Modular Monolith

Mantém uma única aplicação, mas organiza o código em módulos independentes.

```text
Aplicação
├── Usuários
├── Pedidos
├── Pagamentos
└── Relatórios
```

É uma alternativa intermediária entre um monólito tradicional e microsserviços.

---

# 3. Arquitetura em Camadas

```text
Apresentação
      ↓
Aplicação
      ↓
Domínio
      ↓
Infraestrutura
```

Muito utilizada em aplicações corporativas.

---

# 4. Cliente-Servidor

```text
Cliente
   ↓
Servidor
   ↓
Banco de Dados
```

O cliente solicita serviços e o servidor processa as operações.

---

# 5. MVC

MVC significa:

* Model;
* View;
* Controller.

```text
Usuário
   ↓
Controller
   ↓
Model
   ↓
Database

Controller
   ↓
View
```

---

# 6. Arquitetura Hexagonal

Também conhecida como **Ports and Adapters**.

O domínio fica protegido das tecnologias externas.

```text
API
 ↓
┌──────────────┐
│   Domínio    │
└──────────────┘
 ↑
Banco
```

---

# 7. Clean Architecture

Organiza o software para manter as regras de negócio independentes de frameworks e infraestrutura.

```text
Frameworks
    ↓
Adapters
    ↓
Use Cases
    ↓
Entities
```

As dependências devem apontar para dentro.

---

# 8. Domain-Driven Design

DDD concentra a modelagem no domínio do negócio.

Conceitos:

* Entity;
* Value Object;
* Aggregate;
* Repository;
* Domain Service;
* Bounded Context;
* Ubiquitous Language.

---

# 9. Microsserviços

Divide a aplicação em serviços independentes.

```text
API Gateway
├── Usuários
├── Pedidos
├── Pagamentos
└── Estoque
```

### Vantagens

* escalabilidade independente;
* deploy independente;
* isolamento.

### Desvantagens

* complexidade distribuída;
* comunicação de rede;
* observabilidade mais complexa;
* custos operacionais.

---

# 10. Event-Driven

Componentes se comunicam através de eventos.

```text
Pedido criado
      ↓
Event Bus
 ┌────┼────┐
 ↓    ↓    ↓
Email Estoque Pagamento
```

---

# 11. Serverless

Executa código sob demanda sem exigir gerenciamento direto da infraestrutura.

```text
Usuário
   ↓
API Gateway
   ↓
Function
   ↓
Database
```

---

# 12. Cloud Native

É uma abordagem voltada para ambientes modernos de cloud.

Inclui:

* containers;
* Kubernetes;
* automação;
* DevOps;
* observabilidade;
* escalabilidade.

---

## 📌 Comparação

| Arquitetura      | Complexidade | Escalabilidade |
| ---------------- | -----------: | -------------: |
| Monólito         |        Baixa |          Média |
| Modular Monolith |  Baixa/Média |          Média |
| Camadas          |        Baixa |          Média |
| Microsserviços   |         Alta |           Alta |
| Event-Driven     |         Alta |           Alta |
| Serverless       |        Média |           Alta |
