# ⚖️ 07 — Escolha da Arquitetura

## Não existe arquitetura perfeita

Toda arquitetura possui vantagens e desvantagens.

O objetivo é encontrar uma solução adequada ao contexto.

---

## 1. Entender o problema

Perguntas:

* Qual problema será resolvido?
* Quem utilizará?
* Quantos usuários existem?
* Qual o volume de dados?
* O sistema crescerá?

---

## 2. Levantar requisitos

Separar:

```text
Requisitos
├── Funcionais
└── Não funcionais
```

---

## 3. Identificar restrições

Exemplos:

* orçamento;
* prazo;
* equipe;
* tecnologias existentes;
* infraestrutura;
* legislação.

---

## 4. Identificar atributos de qualidade

Pergunte:

* O sistema precisa escalar?
* Segurança é crítica?
* Qual latência é aceitável?
* Qual disponibilidade é necessária?
* Qual o orçamento?

---

## 5. Comparar alternativas

| Critério                 | Monólito | Microsserviços |
| ------------------------ | -------: | -------------: |
| Simplicidade             |    ⭐⭐⭐⭐⭐ |             ⭐⭐ |
| Escalabilidade           |      ⭐⭐⭐ |          ⭐⭐⭐⭐⭐ |
| Custo inicial            |    ⭐⭐⭐⭐⭐ |             ⭐⭐ |
| Complexidade operacional |    ⭐⭐⭐⭐⭐ |             ⭐⭐ |

---

# Trade-offs

Uma decisão arquitetural sempre envolve compensações.

Exemplo:

```text
Microsserviços
     ↓
+ Escalabilidade
+ Independência
     ↓
- Complexidade
- Infraestrutura
- Observabilidade
```

---

# Matriz de decisão

Uma técnica possível:

```text
Pontuação =
Peso × Nota
```

Exemplo:

| Critério       | Peso | Nota |
| -------------- | ---: | ---: |
| Simplicidade   |    5 |    5 |
| Escalabilidade |    4 |    3 |
| Segurança      |    5 |    4 |
| Custo          |    4 |    5 |

Depois:

```text
Pontuação total =
Σ (peso × nota)
```

---

# 📌 Regra fundamental

> **Escolha a arquitetura pelo problema, não pela moda.**

Um sistema pequeno provavelmente não precisa de dezenas de microsserviços apenas porque microsserviços são uma tecnologia popular.

---

# Evolução arquitetural

A arquitetura pode mudar.

```text
Monólito
   ↓
Monólito Modular
   ↓
Serviços independentes
```

Não é necessário começar com a arquitetura mais complexa possível.
