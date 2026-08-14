# 📊 03 — Requisitos e Qualidade

## Requisitos Funcionais

Definem **o que o sistema deve fazer**.

Exemplo:

> O sistema deve permitir que o usuário faça login.

Outro exemplo:

> O sistema deve permitir cadastrar alunos.

---

## Requisitos Não Funcionais

Definem **como o sistema deve funcionar**.

Exemplos:

* responder em menos de 500 ms;
* suportar 100 mil usuários;
* possuir disponibilidade de 99,9%;
* criptografar informações sensíveis;
* permitir escalabilidade.

---

## 🏆 Atributos de qualidade

Alguns atributos importantes:

* desempenho;
* segurança;
* confiabilidade;
* disponibilidade;
* manutenibilidade;
* escalabilidade;
* testabilidade;
* compatibilidade;
* observabilidade.

A ISO/IEC 25010:2023 fornece um modelo internacional para avaliação da qualidade de produtos de software e sistemas.

---

## ⚡ Desempenho

Relaciona-se à eficiência do sistema.

Métricas:

* latência;
* throughput;
* tempo de resposta;
* utilização de CPU;
* utilização de memória.

---

## 📈 Escalabilidade

É a capacidade de lidar com aumento de demanda.

```text
1.000 usuários
      ↓
10.000 usuários
      ↓
100.000 usuários
```

### Escalabilidade vertical

Aumentar os recursos de uma máquina.

```text
2 CPU → 8 CPU
```

### Escalabilidade horizontal

Adicionar novas máquinas ou instâncias.

```text
Servidor
   ↓
Servidor + Servidor
   ↓
Servidor + Servidor + Servidor
```

---

## 🔐 Segurança

A arquitetura deve considerar:

* autenticação;
* autorização;
* criptografia;
* controle de acesso;
* gerenciamento de segredos;
* auditoria.

---

## 🛠️ Manutenibilidade

Um sistema manutenível facilita:

* correções;
* mudanças;
* testes;
* evolução;
* compreensão do código.

---

## 👀 Observabilidade

Permite entender o comportamento interno do sistema através de:

* logs;
* métricas;
* traces.

---

## 📌 Regra importante

> Requisitos não funcionais frequentemente influenciam mais a arquitetura do que os requisitos funcionais.
