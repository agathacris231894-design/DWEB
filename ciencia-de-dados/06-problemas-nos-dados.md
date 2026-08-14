# ⚠️ Problemas nos Dados

Antes de realizar uma análise, é importante verificar a qualidade dos dados.

Entre os problemas mais comuns estão:

* Ruído;
* Valores atípicos;
* Dados duplicados;
* Dados ausentes;
* Inconsistências;
* Erros de formato.

---

# 🔊 Ruído

**Ruído (Noise)** representa informações ou variações irrelevantes que podem dificultar a identificação de padrões reais nos dados.

Exemplo:

```text
23.1
23.4
23.2
85.7  ← possível ruído
23.3
23.5
```

O valor `85.7` pode representar um erro de medição, dependendo do contexto.

---

# 📍 Valores Atípicos — Outliers

São valores muito diferentes da maioria das observações.

Exemplo:

```text
20
21
22
23
24
150  ← possível outlier
```

Um outlier pode representar:

* Erro de medição;
* Erro de digitação;
* Fraude;
* Evento raro;
* Observação legítima.

> **Importante:** um valor atípico não deve ser automaticamente removido. É necessário investigar sua origem e contexto.

---

# ❌ Dados Duplicados

São registros repetidos dentro de um conjunto de dados.

Exemplo:

| ID | Nome |
| -- | ---- |
| 01 | Ana  |
| 02 | João |
| 01 | Ana  |

Duplicações podem causar inconsistências e alterar resultados de análises.

---

# ❓ Dados Ausentes

São informações que deveriam estar presentes, mas não foram registradas.

Exemplo:

| Nome  | Idade | Nota |
| ----- | ----: | ---: |
| Ana   |    20 |  8.5 |
| João  |     — |  7.0 |
| Maria |    22 |    — |

Os valores ausentes precisam ser tratados de acordo com o contexto da análise.

---

## 🧹 Qualidade dos Dados

Antes de analisar um conjunto de dados, é importante verificar:

```text
Dados
 ↓
Qualidade
 ↓
Limpeza
 ↓
Análise
```
