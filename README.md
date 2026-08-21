# GDCSS Castelões — aplicação única

Uma única aplicação Nuxt contém o site público, CMS em `/admin`, API Nitro em `/api` e persistência em `storage/`.

## Desenvolvimento
```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Admin: http://localhost:3000/admin
- Login: http://localhost:3000/admin/login
- API: http://localhost:3000/api/...

Os dados persistentes ficam em `storage/data` e uploads em `storage/uploads`. Configure `AUTH_SECRET` em produção.

## Ajustes — sidebar e agendamento do plantel

- A navegação lateral do Admin possui scroll vertical próprio em ecrãs com pouca altura.
- O campo `Publicar em` do Plantel usa `datetime-local` e é opcional.
- Sem data e com estado `Publicado`, o jogador fica disponível imediatamente no endpoint público.
- Com uma data/hora futura, o jogador só é devolvido pelo endpoint público quando esse instante chegar.
- O campo `Ordem` continua a definir a sequência apresentada no frontend e, em novos jogadores, sugere automaticamente a próxima posição.
- O backend mantém `Nome` ao editar Plantel e Equipa Técnica.
