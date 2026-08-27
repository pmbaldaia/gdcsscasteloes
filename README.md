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


## Imagens carregadas pelo CMS

Os ficheiros enviados pelo Admin são guardados em MongoDB GridFS e expostos em `/uploads/:id`.

O componente `components/SiteImage.vue` distingue automaticamente:
- `/uploads/...` e `/logos/...` → `<img>` direto, sem passar pelo IPX/Nuxt Image (igual ao Admin);
- outros assets estáticos (`/eventos/...`, `/equipa/...`, etc.) → `NuxtImg`, mantendo otimização.

Isto evita URLs `/_ipx/.../uploads/...` e falhas de otimização de logótipos de equipas em produção Netlify.


## Época 2026/2027 — Divisão de Honra

O projeto inclui o calendário validado de 30 jornadas do GDCSS Castelões para 2026/2027.

No CMS, em `/admin/jogos`, existe a ação **Adicionar época 2026/2027**. Esta importação é idempotente e não destrutiva:

- não altera jogos de 2025/2026;
- cria apenas jornadas 2026/2027 em falta;
- cria apenas equipas que ainda não existam;
- preserva logos e dados das equipas existentes;
- novas equipas são criadas com `logo: ""`, para o logo ser posteriormente carregado em `/admin/equipas`;
- repetir a importação não duplica jornadas nem equipas.

Também pode ser executada pela linha de comandos:

```bash
npm run mongo:import-2627
```


## macOS — Sharp/libvips duplicado

O projeto fixa `sharp` em `0.32.6`, a mesma versão usada pelo IPX desta árvore de dependências.

Se uma instalação antiga tiver deixado Sharp 0.34 em `node_modules/@img`, executa:

```bash
npm run deps:reset
npm ci
npm run sharp:check
npm run dev
```

`deps:reset` remove apenas dependências/cache locais (`node_modules`, `.nuxt`, `.output`, `.netlify`); não altera código, `.env` nem MongoDB.

## NuxtPage e layouts

`<NuxtPage />` é renderizado apenas em `app.vue`. Os layouts usam `<slot />`, conforme a arquitetura de layouts do Nuxt.


## Design System GDCSS Castelões

O site público e o CMS partilham a mesma fonte de verdade visual em `assets/css/tokens.css`.
Consultar `docs/design-system.md` antes de adicionar novas cores ou componentes.
