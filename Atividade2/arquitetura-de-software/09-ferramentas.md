# 🛠️ 09 — Ferramentas para Arquitetura de Software

## Diagramas

### Draw.io / diagrams.net

Utilizado para:

* fluxogramas;
* diagramas;
* arquitetura;
* documentação.

### Mermaid

Permite criar diagramas utilizando Markdown.

### PlantUML

Permite gerar diagramas a partir de texto.

### Structurizr

Ferramenta especialmente relacionada ao C4 Model.

---

# Containers

## Docker

Permite empacotar aplicações e suas dependências em containers.

```text
Aplicação
+
Dependências
+
Configuração
      ↓
   Container
```

---

# Orquestração

## Kubernetes

Gerencia workloads baseados em containers.

Principais conceitos:

* Pods;
* Services;
* Deployments;
* ConfigMaps;
* Secrets;
* Ingress.

---

# Infraestrutura como código

## Terraform

Permite definir infraestrutura através de código.

Exemplo conceitual:

```text
Código
   ↓
Terraform
   ↓
Cloud
```

---

# Automação

## GitHub Actions

Pode automatizar:

* testes;
* build;
* análise;
* deploy.

---

# Versionamento

## Git

Controla versões do código.

## GitHub

Hospeda:

* código;
* documentação;
* issues;
* pull requests;
* workflows.

---

# Observabilidade

Ferramentas e tecnologias:

* OpenTelemetry;
* Prometheus;
* Grafana;
* Jaeger.

---

# 📁 Estrutura sugerida

```text
arquitetura/
├── README.md
├── docs/
├── diagrams/
├── adr/
└── src/
```
