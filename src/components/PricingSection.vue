<template>
  <section class="section" id="precos">
    <div class="section-header">
      <div>
        <p class="section-label">Planos mensais</p>
        <h2 class="section-title">Preço justo,<br>sem surpresas</h2>
      </div>
      <p class="section-desc">
        Planos fixos para quem quer consistência, ou contrate avulso para demandas pontuais.
      </p>
    </div>

    <div class="pricing-grid">
      <div
        v-for="plan in plans"
        :key="plan.name"
        class="price-card scroll-anim"
        :class="{ featured: plan.featured }"
      >
        <span v-if="plan.featured" class="popular-tag">Mais escolhido</span>
        <p class="plan-badge">{{ plan.name }}</p>
        <p class="price-amount">{{ plan.price }}</p>
        <p class="price-period">por mês</p>
        <div class="price-divider"></div>
        <ul class="price-features">
          <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
        </ul>
        <a
          href="#contato"
          class="btn-plan"
          :class="plan.featured ? 'btn-plan-solid' : 'btn-plan-outline'"
        >
          Quero esse plano
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

useScrollAnimation('.price-card')

const plans = [
  {
    name: 'Starter',
    price: 'R$ 600',
    featured: false,
    features: [
      '8 posts por mês',
      'Legendas incluídas',
      '2 artes avulsas',
      'Entrega em 48h',
      '1 revisão por entrega',
    ],
  },
  {
    name: 'Profissional',
    price: 'R$ 1.200',
    featured: true,
    features: [
      '16 posts por mês',
      'Legendas + hashtags',
      '5 artes avulsas',
      'Entrega em 24h',
      '2 revisões por entrega',
      'Reunião mensal',
    ],
  },
  {
    name: 'Premium',
    price: 'R$ 2.000',
    featured: false,
    features: [
      'Posts ilimitados',
      'Gestão completa das redes',
      'Artes ilimitadas',
      'Entrega prioritária',
      'Revisões ilimitadas',
      'Stories e reels',
      'Reunião semanal',
    ],
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.price-card {
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 44px 36px;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
}

.price-card:hover {
  border-color: var(--black);
  transform: translateY(-4px);
}

.price-card.featured {
  background: var(--black);
  color: var(--white);
  border-color: var(--black);
}

.price-card.featured:hover {
  border-color: var(--green);
}

.plan-badge {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 20px;
}

.price-card.featured .plan-badge {
  color: rgba(255, 255, 255, 0.5);
}

.popular-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--green);
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 16px;
  border-radius: 100px;
  white-space: nowrap;
}

.price-amount {
  font-family: 'DM Serif Display', serif;
  font-size: 3.2rem;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 4px;
}

.price-period {
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 28px;
}

.price-card.featured .price-period {
  color: rgba(255, 255, 255, 0.5);
}

.price-divider {
  height: 1px;
  background: var(--border);
  margin: 24px 0;
}

.price-card.featured .price-divider {
  background: rgba(255, 255, 255, 0.1);
}

.price-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
}

.price-features li {
  font-size: 0.87rem;
  color: #555;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;
}

.price-card.featured .price-features li {
  color: rgba(255, 255, 255, 0.7);
}

.price-features li::before {
  content: '✓';
  color: var(--green);
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 1px;
}

.price-card.featured .price-features li::before {
  color: #7ecf78;
}

.btn-plan {
  display: block;
  text-align: center;
  padding: 14px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  width: 100%;
}

.btn-plan-outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--black);
}

.btn-plan-outline:hover {
  background: var(--black);
  color: var(--white);
  border-color: var(--black);
}

.btn-plan-solid {
  background: var(--white);
  color: var(--black);
  border: none;
}

.btn-plan-solid:hover {
  background: var(--green);
  color: var(--white);
}

@media (max-width: 900px) {
  .section {
    padding: 64px 24px;
  }
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
