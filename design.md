# Design system - Renovadora JF

Este documento define o conceito visual, tokens, componentes e regras de UX do site atual da Renovadora JF. Toda mudanca futura deve preservar estes padroes para manter a identidade da landing page consistente.

## Conceito

O site tem uma linguagem premium, escura, artesanal e corporativa. A interface deve transmitir tradicao, confianca, acabamento cuidadoso e atendimento profissional, sem parecer generica ou excessivamente carregada.

Principios visuais:

- Fundo escuro com profundidade, usando gradientes discretos.
- Cartoes translucidose com borda fina, blur e sombra suave.
- Vermelho vinho como cor principal de acao e destaque.
- Tipografia forte nos titulos e leitura confortavel nos textos.
- Layout centralizado, com largura maxima consistente.
- Movimentos sutis, nunca chamativos.
- Imagens reais ou locais devem carregar o sentido visual do site.

## Paleta

Cores principais:

```css
--color-bg-main: #07111f;
--color-bg-start: #06101b;
--color-bg-mid: #09192d;
--color-bg-end: #050d17;
--color-primary: #a21f3b;
--color-primary-hover: #bb2a4b;
--color-brand-dark: #141c40;
--color-text-main: #ffffff;
--color-text-body: #e5e7eb;
--color-text-muted: #cbcbcb;
--color-soft-highlight: #f0b4bf;
--color-panel-border: rgba(255, 255, 255, 0.10);
--color-panel-bg: rgba(255, 255, 255, 0.05);
```

Uso:

- Fundo geral: `#07111f` com gradientes escuros.
- CTA principal: `#a21f3b`.
- Hover de CTA: `#bb2a4b`.
- Destaques secundarios: `#f0b4bf`.
- Texto principal: branco.
- Texto de apoio: `#e5e7eb` com opacidade entre 80% e 90%.
- Bordas: sempre claras com baixa opacidade, normalmente `border-white/10`.

Evitar:

- Fundos claros dominantes.
- Roxo como cor principal.
- Muitas cores novas sem funcao clara.
- Cards opacos pesados.
- Gradientes coloridos fortes.

## Tipografia

Fontes usadas:

```css
font-family-base: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
font-family-title: Montserrat, Inter, system-ui, sans-serif;
font-family-support: Poppins, Inter, system-ui, sans-serif;
```

Regras:

- Titulos principais usam Montserrat.
- Textos comuns usam Inter.
- Peso dos titulos: `700` em secoes principais, `600` em cards.
- Corpo do texto deve manter `leading-7` ou `leading-8`.
- Nao usar letter spacing negativo.
- Eyebrows/kickers usam uppercase com tracking amplo.

Escala atual:

```css
section-title-mobile: 2rem;
section-title-sm: 2.375rem;
section-title-lg: 2.75rem;
body-size: 16px;
card-title: 1.125rem a 1.25rem;
small-label: 10px a 12px;
```

Hero:

- H1 pode usar `text-5xl sm:text-6xl lg:text-7xl`.
- Supporting copy deve ficar entre `text-base` e `text-xl`.
- Hero text sempre centralizado no estado atual.

## Layout

Container:

```txt
max-width principal: max-w-6xl
padding horizontal mobile: px-4
padding horizontal tablet: sm:px-6
padding horizontal desktop: lg:px-8 ou lg:px-10
```

Secoes:

```txt
padding vertical padrao: py-16
header interno: mb-10 text-center
section kicker: centralizado
section title: abaixo do kicker
section subtitle: max-w-2xl centralizado
```

Scroll:

```css
html { scroll-behavior: smooth; }
section[id] { scroll-margin-top: 7rem; }
@media (min-width: 1024px) {
  section[id] { scroll-margin-top: 8.5rem; }
}
```

Regras:

- Manter a navbar fixa sem cobrir os titulos das secoes.
- Nao aumentar demais a escala dos blocos; o site nao deve parecer com zoom.
- Cada secao deve respirar, mas sem ficar esticada artificialmente.
- Usar grids responsivos ja existentes: `grid-cols-2`, `sm:grid-cols-3`, `lg:grid-cols-5`, `md:grid-cols-2`, `xl:grid-cols-4`.

## Background

Fundo global atual:

```css
background:
  radial-gradient(circle at top, rgba(162, 31, 59, 0.14), transparent 25%),
  radial-gradient(circle at bottom right, rgba(20, 28, 64, 0.75), transparent 30%),
  linear-gradient(180deg, #06101b 0%, #09192d 50%, #050d17 100%);
```

Background fixo no App:

```css
radial-gradient(circle_at_top_left, rgba(162,31,59,0.18), transparent 28%),
radial-gradient(circle_at_top_right, rgba(20,28,64,0.55), transparent 35%),
linear-gradient(180deg, #07111f 0%, #09192d 52%, #06101b 100%)
```

Tambem existe uma grade sutil:

```css
opacity: 0.18;
background-size: 56px 56px;
```

Regras:

- Preservar atmosfera escura e premium.
- Usar gradientes discretos apenas para profundidade.
- Nao adicionar elementos decorativos chamativos.

## Componentes base

### Premium panel

Classe global:

```css
.premium-panel {
  rounded-2xl;
  border: border-white/10;
  background: bg-white/5;
  shadow: 0 14px 36px rgba(0,0,0,0.22);
  backdrop-blur-xl;
}
```

Uso:

- Formularios.
- Containers de parceiros.
- Blocos maiores de conteudo.
- Modais ou paineis principais.

### Premium card

Classe global:

```css
.premium-card {
  rounded-2xl;
  border: border-white/10;
  background: bg-white/5;
  shadow: 0 12px 28px rgba(0,0,0,0.18);
  backdrop-blur-xl;
  transition: duration-300;
}
```

Hover:

```css
hover:-translate-y-0.5;
hover:border-white/20;
hover:bg-white/[0.08];
hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)];
```

Uso:

- Cards de servicos.
- Cards da galeria.
- Missao e visao.
- Itens repetidos.

### Section kicker

```css
rounded-full;
border-white/10;
bg-white/5;
px-4;
py-2;
text-xs;
font-semibold;
uppercase;
tracking-[0.28em];
text-[#cbcbcb]/80;
```

Uso:

- Sempre acima do titulo da secao.
- Preferencialmente centralizado com `mx-auto`.

### Section title

```css
font-family: Montserrat;
font-weight: 700;
line-height: 1.12;
letter-spacing: 0;
color: #ffffff;
```

Uso:

- Titulo principal de cada secao.
- Nao usar dentro de cards pequenos.

### Section subtitle

```css
max-width: 2xl;
margin-top: 0.75rem;
font-size: text-sm sm:text-base;
line-height: 1.75rem;
color: #cbcbcb com 80% de opacidade;
```

Uso:

- Uma frase curta explicando a secao.
- Evitar paragrafos longos no topo.

## Botoes e CTAs

CTA principal:

```txt
rounded-full
bg-[#a21f3b]
px-7 py-3.5
font-semibold
text-white
shadow-[0_18px_40px_rgba(162,31,59,0.28)]
hover:-translate-y-0.5
hover:bg-[#bb2a4b]
transition-all duration-300
```

CTA secundario:

```txt
rounded-full
border border-white/15
bg-white/5
px-7 py-3.5
font-semibold
text-white/90
backdrop-blur-md
hover:bg-white/10
```

WhatsApp fixo:

```txt
fixed bottom-5 right-5 z-50
rounded-full
border-white/15
bg-white/10
backdrop-blur-xl
hover:bg-emerald-500/90
```

Regras:

- O CTA principal deve ser vinho.
- WhatsApp pode usar verde apenas em hover ou icone social.
- Evitar botoes retangulares duros; o site usa pill buttons.
- Usar `target="_blank"` e `rel="noopener noreferrer"` em links externos.
- Manter `aria-label` em botoes somente com icone.

## Header

Padrao atual:

- Header fixo no topo.
- Container com `max-w-6xl`.
- Bordas arredondadas `rounded-2xl`.
- Blur forte `backdrop-blur-xl`.
- Fundo muda quando rola a pagina.
- Logo reduz de `h-11/h-12` para `h-9/h-10` no scroll.

Desktop:

- Navegacao horizontal.
- Links em pill hover com `hover:bg-white/10`.

Mobile:

- Botao circular de menu.
- Menu em painel interno com `grid-rows` animado.
- Links com `rounded-xl px-4 py-3`.

Regras:

- Nao aumentar muito a altura do header.
- Manter contraste suficiente sobre a hero.
- Qualquer nova ancora precisa respeitar `scroll-margin-top`.

## Hero

Padrao atual:

- Full visual section com `min-h-[92svh]`.
- Imagem local em background: `/images/hero-bg.jpg`.
- Overlay escuro linear.
- Conteudo centralizado vertical e horizontalmente.
- Texto sem card.
- Seta inferior com botao circular translucid.

Estrutura:

```txt
section relative flex min-h-[92svh] overflow-hidden
background image absolute inset-0 object-cover
overlay escuro
content max-w-6xl centered
inner max-w-3xl text-center
```

Regras:

- Nao voltar a usar carrossel de background na hero.
- Nao colocar o texto da hero dentro de card.
- Nao usar split layout na hero.
- Manter a seta de proxima secao proxima ao fim da hero.
- Background deve ser local e otimizado.

## Galeria

Padrao atual:

- Imagens locais em `/images/gallery/gallery-01.jpg` ate `/gallery-20.jpg`.
- Inicialmente mostra 10 imagens.
- Botao "Ver mais imagens" adiciona mais 10.
- Grid responsivo:

```txt
grid-cols-2
sm:grid-cols-3
lg:grid-cols-5
```

Cards:

- Aspect ratio `aspect-[4/5]`.
- Imagem com `object-cover`.
- Hover com zoom suave `group-hover:scale-110`.
- Overlay escuro inferior.
- Badge pequeno no rodape.

Modal:

- Fundo fixo escuro com `backdrop-blur-xl`.
- Imagem com `max-h-[80vh] object-contain`.
- Teclado: Escape fecha, setas navegam.

Regras:

- Usar sempre imagens locais.
- Manter 5 colunas no desktop.
- Nao trocar por links externos.
- Antes de substituir imagens reais, manter nomes previsiveis ou atualizar o array com clareza.

## Servicos

Padrao atual:

- 4 cards em grid `md:grid-cols-2 xl:grid-cols-4`.
- Icones locais em `/images`.
- Icones dentro de caixa `h-14 w-14`.
- CTA central para catalogo.
- Parceiros em carrossel Swiper com autoplay.

Parceiros:

- Container `premium-panel`.
- Slides com `h-24`.
- Logos centralizados com `object-contain`.
- Breakpoints do Swiper:

```js
480: { slidesPerView: 2.2 }
640: { slidesPerView: 3 }
900: { slidesPerView: 4 }
1200: { slidesPerView: 5 }
```

Regras:

- Logos de parceiros devem ser locais.
- Preferir PNG/SVG otimizados e com fundo transparente quando possivel.
- Nao distorcer logos; usar `object-contain`.
- Evitar filtros globais se a logo precisar manter suas cores originais.

## Sobre

Padrao atual:

- Secao em grid `lg:grid-cols-[1fr_1.15fr]`.
- Painel visual com imagem `/images/about.png`.
- Blocos de tradicao, atendimento e qualidade.
- Texto historico em `premium-panel`.
- Cards de missao e visao.

Regras:

- Preservar o tom historico e familiar.
- Nao remover nomes e fatos da historia sem validacao.
- Melhorias visuais devem manter o carater premium, escuro e institucional.

## Contato

Padrao atual:

- Grid em duas colunas no desktop.
- Dados de contato em `premium-panel`.
- Icones sociais sem texto, com `aria-label` e `title`.
- Formulario em `premium-panel`.
- Inputs escuros, borda clara e foco vinho.

Inputs:

```txt
rounded-2xl
border-white/10
bg-white/5
p-4
text-white
placeholder:text-white/45
focus:border-[#f0b4bf]/50
focus:bg-white/[0.08]
focus:ring-[#a21f3b]/30
```

Regras:

- Manter os icones sociais sem texto.
- Botao de envio segue CTA principal.
- Redes sociais usam suas cores proprias nos botoes.

## Imagens e assets

Pastas relevantes:

```txt
public/images/
public/images/gallery/
public/images/parceiros/
```

Regras:

- Imagens principais devem ser locais.
- Usar `loading="lazy"` em imagens abaixo da primeira dobra.
- Usar `loading="eager"` e `fetchPriority="high"` apenas na hero.
- Usar `decoding="async"` em imagens de galeria.
- Evitar arquivos pesados acima do necessario.
- Trocas de imagem devem preservar proporcao e enquadramento.

## Motion

Animacoes atuais:

```css
fadeIn: 0.55s ease-out;
softFloat: 8s ease-in-out infinite;
softBounce: 2.8s ease-in-out infinite;
heroRing: 3.2s ease-in-out infinite;
```

Transicoes:

```txt
transition-all duration-300
hover:-translate-y-0.5
hover:scale-[1.03]
group-hover:scale-110 em imagens
```

Regras:

- Animacoes devem ser sutis.
- Evitar delays excessivos.
- Evitar animacoes que prejudiquem leitura ou performance.

## Acessibilidade

Regras:

- Links externos devem ter `rel="noopener noreferrer"`.
- Botoes apenas com icone precisam de `aria-label`.
- Modais devem usar `role="dialog"` e `aria-modal="true"`.
- Alt de imagem deve descrever o conteudo quando a imagem for informativa.
- Imagens decorativas usam `alt=""` e `aria-hidden="true"`.
- Contraste deve permanecer alto no fundo escuro.
- Textos nao devem sobrepor imagens sem overlay suficiente.

## Performance

Regras:

- Nao reintroduzir carrossel pesado na hero.
- Manter assets locais otimizados.
- Evitar bibliotecas novas para tarefas simples.
- Reaproveitar componentes e classes existentes.
- Build deve passar com `npm run build` antes de deploy.

## Checklist para futuras alteracoes

Antes de alterar UI ou UX:

- A mudanca usa as cores do sistema?
- O layout respeita `max-w-6xl`?
- O componente usa `premium-panel`, `premium-card`, `section-kicker`, `section-title` ou `section-subtitle` quando aplicavel?
- O CTA principal continua vinho?
- A responsividade foi pensada para mobile, tablet e desktop?
- A navbar nao cobre o titulo da secao?
- As imagens sao locais e otimizadas?
- O WhatsApp continua facil de acessar?
- O build passa?

## Padrao recomendado para nova secao

```jsx
<section id="nova-secao" className="relative px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto w-full max-w-6xl">
    <div className="mb-10 text-center">
      <div className="section-kicker mx-auto">Categoria</div>
      <h2 className="section-title mt-4">Titulo da secao</h2>
      <p className="section-subtitle">
        Texto curto, claro e alinhado ao posicionamento atual da landing page.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div className="premium-card premium-card-hover p-5">
        <h3 className="text-lg font-semibold text-white">Titulo do card</h3>
        <p className="mt-3 text-sm leading-7 text-[#e5e7eb]/85">
          Texto de apoio com leitura confortavel.
        </p>
      </div>
    </div>
  </div>
</section>
```

## Regra principal

Qualquer nova implementacao deve parecer uma extensao natural do site atual. Preserve o tema escuro premium, a hierarquia visual, o uso de vidro translucid, os CTAs vinho, a tipografia Montserrat/Inter e os espacamentos ja praticados na landing page.
