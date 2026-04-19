<template>
  <section class="section testimonials-section">
    <div class="section-header">
      <div>
        <p class="section-label">O que dizem</p>
        <h2 class="section-title">Quem já trabalhou com a gente</h2>
      </div>
    </div>

    <div class="testimonials-grid">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="testimonial-card scroll-anim"
      >
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">"{{ testimonial.text }}"</p>
        <div class="testimonial-author">
          <div class="avatar">{{ testimonial.initials }}</div>
          <div>
            <p class="author-name">{{ testimonial.name }}</p>
            <p class="author-role">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

useScrollAnimation('.testimonial-card')

const testimonials = [
  {
    initials: 'AG',
    name: 'Armando Gomes',
    role: 'DSouto, RJ',
    text: 'Ficamos muitos felizes pelo trabalho feito e realizados por tamanha sensibilidade ao interpretar cada detalhe.',
  },
  {
    initials: 'SS',
    name: 'Silmara da Silva',
    role: 'AO Serviço, SC',
    text: 'Fui muito bem atendida desde o começo, com muita paciência e atenção aos detalhes. Estou muito satisfeita com o serviço, me ajudou demais na comunicação com as novas clientes!',
  },
]
</script>

<style scoped>
.testimonials-section {
  background: var(--cream);
}

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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: var(--white);
  border-radius: 16px;
  padding: 32px;
}

.stars {
  color: var(--green);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.testimonial-text {
  font-family: 'DM Serif Display', serif;
  font-size: 1.05rem;
  line-height: 1.55;
  margin-bottom: 24px;
  font-style: italic;
  color: var(--black);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--green-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--green);
  flex-shrink: 0;
}

.author-name {
  font-size: 0.88rem;
  font-weight: 500;
}

.author-role {
  font-size: 0.78rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .section {
    padding: 64px 24px;
  }
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
