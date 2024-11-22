# Desenvolvimento Web 2

Backend exemplo para a disciplina de Desenvolvimento Web 2


## Configuração do projeto

Iniciar o projeto
```bash
npm init -y
```

Criar arquivo `.gitignore` e adicionar a pasta node_modules

Alterar o formato de importação/exportação do node no arquivo `package.json`

```json
"type": "module",
```

## Dependências
Instalar as seguintes dependências:

- Framework web - Fastify
- Driver Postgres
- Variáveis de ambiente - dotenv

```bash
npm install fastify
npm install postgres
npm install -D dotenv
```

Criar o script dev no `package.json`

```json
"dev": "node --watch server.js"
```

Criar o arquivo .env para e preencher as variáveis de ambiente

```
PORT=
URL=""
```

Adicionar o arquivo `.env` no `.gitignore`

## Banco de Dados

Criar um banco de dados na [Neon.tech](https://neon.tech/)



## Extensões

- REST Client

