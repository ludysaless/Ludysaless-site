# Ludy Sales — Site

Site de página única, responsivo e preparado para GitHub Pages.

## Estrutura

- `index.html` — página principal
- `style.css` — visual e responsividade
- `script.js` — configuração dos links
- `assets/fundo.jpeg` — foto usada no fundo

## Como configurar os links

Abra `script.js` e altere:

```js
const LINKS = {
  conteudo: "SEU_LINK",
  whatsapp: "SEU_LINK",
  instagram: "SEU_LINK",
  vip: "SEU_LINK"
};
```

Depois faça commit/push para o GitHub.

## GitHub Pages

No repositório:
Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

Depois, quando quiser, é possível conectar um domínio próprio.
