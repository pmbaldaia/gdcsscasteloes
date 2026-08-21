# GDCSS Castelões — aplicação única com MongoDB

Este projeto contém, na mesma aplicação Nuxt, o site público, o CMS em `/admin`, a API Nitro e a persistência MongoDB.

## Fonte única de dados

Em runtime, o frontend e o Admin usam exclusivamente a API interna `/api/*`, e todos os repositories do backend usam MongoDB Atlas. Não existe fallback para `data/*.js` ou `storage/data/*.json` na aplicação em execução.

Os dados atuais do projeto foram preservados em `server/backend/core/seed-data.mjs` apenas como fonte da migração inicial.

## Base de testes configurada

O ficheiro `.env` incluído neste ZIP aponta para o cluster de testes fornecido e utiliza a base:

```text
gdcsscasteloes_test
```

`.env` está ignorado pelo Git.

## Instalação

```bash
npm install
```

## Migrar os dados atuais para MongoDB

O comando abaixo limpa apenas as coleções da base indicada em `MONGODB_DB` e volta a preenchê-las com os dados atuais do projeto:

```bash
npm run mongo:migrate
```

É idempotente para esta base de testes: cada execução recria as coleções de conteúdo a partir dos dados atuais.

Depois confirma os dados:

```bash
npm run mongo:check
```

As coleções migradas incluem:

- games
- teams
- events
- gallery
- members
- board
- staff
- players
- users
- messages
- settings
- sponsors
- opportunities

## Executar localmente

```bash
npm run dev
```

- Site: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`
- Login: `http://localhost:3000/admin/login`
- Health MongoDB: `http://localhost:3000/api/health`

## Fluxo de dados

```text
Frontend ─┐
          ├── /api/* ── MongoDB Atlas
/admin ───┘
```

O frontend não lê diretamente ficheiros JSON para obter jogos, equipas, eventos, galeria, plantel, direção, equipa técnica, patrocinadores, oportunidades ou definições.

## Media / uploads

Os assets que já pertencem ao site continuam em `/public` e mantêm os seus URLs atuais. Novos uploads feitos pelo CMS são guardados em MongoDB GridFS e servidos por `/uploads/:id`.

## Netlify

O projeto usa Nitro/SSR, não geração estática:

```toml
[build]
command = "npm run build"
publish = "dist"

[build.environment]
NODE_VERSION = "20"
NITRO_PRESET = "netlify"
```

Na Netlify devem existir as variáveis:

- `MONGODB_URI`
- `MONGODB_DB=gdcsscasteloes_test` (ou a base de produção quando chegar a altura)
- `AUTH_SECRET`
- `AUTH_TTL_SECONDS`
- `NUXT_SITE_URL`

## Produção

Antes de passar a produção, usar outra base (`gdcsscasteloes`) e alterar `AUTH_SECRET` e a credencial MongoDB usada nos testes.
