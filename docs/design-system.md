# Design System — GDCSS Castelões

Fonte visual única para o site público e CMS.

## Tokens

- Primária 50: `#ebffeb`
- Primária 700: `#007000`
- Primária 800: `#005c00`
- Primária 900: `#004c00`
- Primária 950: `#003300`
- Secundária 50: `#ffebeb`
- Secundária 500: `#ff0000`
- Secundária 800: `#b80000`
- Secundária 900: `#990000`
- Secundária 950: `#700000`
- Neutral 50: `#f8fafc`
- Neutral 200: `#e2e8f0`
- Neutral 600: `#475569`
- Neutral 900: `#0f172a`
- Surface: `#ffffff`

Os valores vivem em `assets/css/tokens.css`. Tailwind e o CMS apontam para essas variáveis em vez de duplicarem hexadecimais.

## Regras

- Verde é a cor primária da interface.
- Vermelho vivo (`secondary-500`) é usado apenas em acentos decorativos.
- Texto e botões vermelhos usam `secondary-800`.
- Foco de teclado usa `primary-700`.
- Tipografia: Inter.
- Botão: radius 8px, padding aproximado 9px × 20px, semibold.
- Card: fundo branco, border `neutral-200`, radius 14–16px, sombra subtil.
- Evitar classes genéricas `green-*`, `red-*`, `slate-*`, `gray-*` e `blue-*` nas views.

## Tailwind

Usar:

```html
bg-primary-800
hover:bg-primary-950
text-primary-900
bg-secondary-500
text-secondary-800
border-neutral-200
text-neutral-600
bg-neutral-50
```

## CMS

O CMS usa os mesmos tokens através dos aliases em `assets/css/admin.css`.
Não criar uma paleta separada para a área administrativa.
