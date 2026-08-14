# 🤖 14 — Inteligência Artificial e Arquitetura de Software

## IA como ferramenta arquitetural

A Inteligência Artificial generativa começou a ser utilizada como apoio em diferentes atividades de arquitetura.

Pode ajudar em:

* geração de alternativas;
* documentação;
* diagramas;
* análise de código;
* identificação de problemas;
* refatoração;
* transformação de requisitos em arquitetura.

---

# Fluxo

```text
Requisitos
    ↓
IA
    ↓
Alternativas
    ↓
Arquiteto
    ↓
Avaliação
    ↓
Decisão
    ↓
ADR
    ↓
Implementação
```

---

# ⚠️ Limitações

IA pode apresentar:

* alucinações;
* informações incorretas;
* decisões inadequadas;
* problemas de segurança;
* problemas de privacidade;
* dificuldade em compreender contexto empresarial.

Por isso:

> IA deve auxiliar o processo arquitetural, mas decisões críticas precisam ser avaliadas por profissionais.

---

# Arquitetura de sistemas de IA

Uma aplicação baseada em LLM pode ter:

```text
Usuário
   ↓
Frontend
   ↓
API
   ↓
Orquestrador
   ├── LLM
   ├── RAG
   ├── Vector Database
   ├── APIs externas
   └── Banco de Dados
```

---

# RAG

RAG significa:

**Retrieval-Augmented Generation**

Fluxo simplificado:

```text
Pergunta
   ↓
Busca documentos
   ↓
Contexto relevante
   ↓
LLM
   ↓
Resposta
```

---

# Agentes

Sistemas de agentes podem:

* interpretar objetivos;
* planejar;
* utilizar ferramentas;
* consultar APIs;
* executar ações;
* avaliar resultados.

---

# Novos componentes arquiteturais

Sistemas de IA podem exigir:

* bancos vetoriais;
* modelos;
* embeddings;
* pipelines;
* guardrails;
* avaliação;
* observabilidade de modelos.

---

# 📌 Conclusão

A IA não elimina a necessidade de arquitetura.

Ela cria novos problemas arquiteturais e também novas ferramentas para solucioná-los.
