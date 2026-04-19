<template>
  <section class="section" id="servicos">
    <div class="section-header">
      <div>
        <p class="section-label">O que fazemos</p>
        <h2 class="section-title">Tudo que seu negócio precisa no digital</h2>
      </div>
      <p class="section-desc">
        Sem contrato longo, sem burocracia. Você pede, a gente entrega — rápido e com qualidade.
      </p>
    </div>

    <div class="services-grid">
      <div
        v-for="service in services"
        :key="service.number"
        class="service-card scroll-anim"
      >
        <div class="service-number">{{ service.number }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <span class="service-price">{{ service.price }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

useScrollAnimation('.service-card')

const services = [
  {
    number: '01',
    title: 'Sites/Landing Pages',
    description: 'Desenvolvimento de sites e páginas de conversão 100% personalizadas. Foco em performance, design moderno e resultados.',
    price: 'a partir de R$ 700',
  },
  {
    number: '02',
    title: 'Design & Artes',
    description: 'Posts, stories, capas, flyers, cardápios e tudo que precisar. Entrega em até 24 horas.',
    price: 'a partir de R$ 60/arte',
  },
  {
    number: '03',
    title: 'Identidade Visual',
    description: 'Logo, paleta de cores, tipografia e manual da marca. Tudo para você ter um visual profissional.',
    price: 'a partir de R$ 500',
  },
  {
    number: '04',
    title: 'Social Media',
    description: 'Gestão completa do seu Instagram, Facebook ou LinkedIn. Planejamento, criação e publicação de conteúdo.',
    price: 'a partir de R$ 600/mês',
  },
  {
    number: '05',
    title: 'Apresentações',
    description: 'Decks profissionais para reuniões, propostas comerciais e pitches. Visual limpo e impactante.',
    price: 'a partir de R$ 200',
  },
  {
    number: '06',
    title: 'Sob Demanda',
    description: 'Precisa de algo que não está na lista? Manda uma mensagem. Se for digital, a gente resolve.',
    price: 'orçamento rápido',
  },
]
</script>

<style scoped>
.section {
  padding: 100px 60px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 64px;
  gap: 40px;
  flex-wrap: wrap;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
}

.section-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.15;
  letter-spacing: -1px;
  max-width: 480px;
}

.section-desc {
  font-size: 0.95rem;
  color: #666;
  max-width: 340px;
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.service-card {
  background: var(--white);
  padding: 44px 36px;
  transition: background 0.25s;
  cursor: default;
  position: relative;
}

.service-card:hover {
  background: var(--cream);
}

.service-number {
  font-family: 'DM Serif Display', serif;
  font-size: 2.8rem;
  color: var(--border);
  line-height: 1;
  margin-bottom: 24px;
  font-style: italic;
}

.service-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.3rem;
  margin-bottom: 12px;
  letter-spacing: -0.3px;
}

.service-card p {
  font-size: 0.88rem;
  color: #666;
  line-height: 1.65;
  margin-bottom: 24px;
}

.service-price {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--green);
  background: var(--green-light);
  padding: 6px 14px;
  border-radius: 100px;
  display: inline-block;
}

@media (max-width: 900px) {
  .section {
    padding: 64px 24px;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
