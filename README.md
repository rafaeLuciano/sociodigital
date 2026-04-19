# Sócio Digital — Vue 3

Landing page do Sócio Digital convertida para Vue 3 com Vite + Composition API.

## Estrutura

```
src/
  components/
    AppNav.vue           # Navbar fixa com blur
    HeroSection.vue      # Hero com animações de entrada
    TickerBanner.vue     # Faixa animada em loop
    ServicesSection.vue  # Grid de 6 serviços
    HowItWorksSection.vue # 4 passos em fundo preto
    PricingSection.vue   # 3 planos de preço
    TestimonialsSection.vue # 3 depoimentos
    ContactSection.vue   # Formulário de contato
    AppFooter.vue        # Rodapé
  composables/
    useScrollAnimation.js # IntersectionObserver para fade-in ao scroll
  assets/styles/
    variables.css        # CSS custom properties globais
  App.vue
  main.js
```

## Como rodar

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build
npm run preview
```
