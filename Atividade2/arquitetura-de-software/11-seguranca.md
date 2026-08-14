# 🔐 11 — Segurança Arquitetural

A segurança deve ser considerada desde a concepção do sistema.

---

# Autenticação

Responde:

> Quem é você?

Exemplos:

* senha;
* OAuth;
* OpenID Connect;
* tokens;
* biometria.

---

# Autorização

Responde:

> O que você pode fazer?

Exemplo:

```text
Usuário
 ├── visualizar
 └── editar

Administrador
 ├── visualizar
 ├── editar
 └── excluir
```

---

# Defense in Depth

Utiliza várias camadas de proteção.

```text
Internet
   ↓
Firewall
   ↓
Gateway
   ↓
Autenticação
   ↓
Autorização
   ↓
Aplicação
   ↓
Banco
```

---

# Least Privilege

Cada componente deve possuir apenas as permissões necessárias.

---

# Zero Trust

Não assumir automaticamente que um usuário ou dispositivo é confiável.

---

# Criptografia

Pode ser utilizada:

### Em trânsito

```text
Cliente
  ↓
HTTPS
  ↓
Servidor
```

### Em repouso

Dados armazenados de forma criptografada.

---

# Gerenciamento de segredos

Senhas, tokens e chaves não devem ser armazenados diretamente no código.

Exemplo ruim:

```python
PASSWORD = "minha_senha"
```

Melhor:

```text
Aplicação
    ↓
Secret Manager
    ↓
Credencial
```

---

# 📌 Princípio

> Segurança deve fazer parte da arquitetura, não ser adicionada apenas no final do desenvolvimento.
