# 🐍 Exemplo com Python

Python possui um grande ecossistema para Ciência de Dados.

Uma das principais bibliotecas utilizadas é o **pandas**.

---

## 📦 Criando um DataFrame

```python
import pandas as pd

dados = {
    "nome": ["Ana", "João", "Maria", "Pedro"],
    "idade": [20, 25, 30, 22],
    "nota": [8.5, 7.0, 9.2, 6.5]
}

df = pd.DataFrame(dados)

print(df)
```

---

## 📊 Calculando a média

```python
media = df["nota"].mean()

print(media)
```

---

## 🏆 Encontrando a maior nota

```python
maior_nota = df["nota"].max()

print(maior_nota)
```

---

## ✅ Filtrando alunos aprovados

```python
aprovados = df[df["nota"] >= 7]

print(aprovados)
```

---

## 🧠 Conceitos utilizados

Neste exemplo foram utilizados:

* Python;
* pandas;
* DataFrame;
* Dicionários;
* Seleção de colunas;
* Média;
* Valor máximo;
* Filtragem de dados.

---

## 🎯 Objetivo

O exemplo demonstra algumas operações básicas que podem fazer parte de uma análise de dados utilizando Python.
