# CMS aplicado ao site existente

Este projeto mantém as páginas, componentes, rotas e módulos originais. O CMS não cria uma segunda versão do site.

## Fluxo

- `pages`: controla publicação e SEO das páginas que já existem.
- `contentBlocks`: controla as secções/textos/imagens/CTAs existentes em cada página.
- `menus`: controla menu principal e links de rodapé, sem uma segunda lista hardcoded.
- `settings`: mantém apenas dados globais (clube, contacto, rodapé e redes sociais).
- `games`, `teams`, `players`, `staff`, `board`, `events`, `gallery`, `sponsors`, `opportunities`: continuam a controlar os módulos dinâmicos existentes.

## Inicialização sem perder conteúdo

Executar uma vez:

```bash
npm run cms:bootstrap
```

O comando é idempotente: preserva páginas/blocos que já existam e só cria as áreas em falta. Se o hero antigo ainda estiver guardado em `settings`, os valores atuais são migrados para o bloco `inicio / hero` na primeira criação.

## Páginas mapeadas

- Início: hero, destaques, próximo jogo, patrocínios e CTA.
- Sobre nós: cabeçalho, nome/morada/imagem/mapa do campo.
- Equipa: cabeçalho e títulos das secções; membros continuam nas collections próprias.
- Calendário: cabeçalho; jogos continuam na collection `games`.
- Eventos: cabeçalho; eventos continuam na collection `events`.
- Galeria: cabeçalho; álbuns continuam na collection `gallery`.
- Oportunidades: cabeçalho, CTA e dados da collection `opportunities`.
- Contacto: cabeçalho; formulário e mensagens mantêm o fluxo existente.
- Políticas: cabeçalho e secções de conteúdo passam a blocos editáveis.
