# RENOVAJF Site

Landing page institucional da RenovaJF construída com React, Vite, Tailwind CSS e Swiper.

## Tecnologias

- React 18
- Vite 5
- Tailwind CSS 3
- Swiper
- react-icons

## Estrutura principal

- `src/main.jsx` - ponto de entrada do React
- `src/App.jsx` - composição principal da página
- `src/config/site.js` - configuração centralizada com `import.meta.env`
- `src/components/` - seções da landing page
- `public/` - imagens, PDF e demais ativos estáticos

## Setup do ambiente

1. Instale as dependências:

```bash
npm install
```

2. Verifique o arquivo de ambiente local:

- O projeto já inclui um [`.env`](./.env) preenchido para uso local
- Se precisar recriar, copie os valores de [`.env.example`](./.env.example)

3. Execute o projeto em desenvolvimento:

```bash
npm run dev
```

4. Gere o build de produção:

```bash
npm run build
```

5. Visualize o build localmente:

```bash
npm run preview
```

## Variáveis de ambiente

O projeto usa variáveis com prefixo `VITE_`, acessadas em `src/config/site.js`.

Variáveis disponíveis:

- `VITE_SITE_NAME`
- `VITE_WHATSAPP_NUMBER`
- `VITE_WHATSAPP_LINK`
- `VITE_CONTACT_PHONE`
- `VITE_CONTACT_EMAIL`
- `VITE_CONTACT_ADDRESS`
- `VITE_INSTAGRAM_URL`
- `VITE_FACEBOOK_URL`
- `VITE_CATALOG_PDF`

## Observações

- Os arquivos `.env` e `.env.local` devem ficar apenas no ambiente local.
- O arquivo [`.env.md`](./.env.md) documenta o mapeamento completo do projeto e da estrutura de variáveis.
