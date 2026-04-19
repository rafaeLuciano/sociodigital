<template>
  <section class="how-section" id="como-funciona">
    <p class="section-label">Como funciona</p>
    <h2 class="section-title">Simples, direto e sem enrolação</h2>

    <div class="steps">
      <div
        v-for="step in steps"
        :key="step.number"
        class="step scroll-anim"
      >
        <p class="step-num">{{ step.number }} —</p>
        <h4>{{ step.title }}</h4>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

useScrollAnimation('.step')

const steps = [
  {
    number: '01',
    title: 'Você manda uma mensagem',
    description: 'Via WhatsApp ou formulário. Conta o que precisa e quando quer.',
  },
  {
    number: '02',
    title: 'A gente passa o orçamento',
    description: 'Resposta em até 2 horas. Sem surpresas, sem letras miúdas.',
  },
  {
    number: '03',
    title: 'Aprovação e pagamento',
    description: 'Pix, cartão ou transferência. Só começa quando você aprovar.',
  },
  {
    number: '04',
    title: 'Entrega e ajustes',
    description: 'Entregamos no prazo combinado com até 2 rodadas de ajuste incluídas.',
  },
]
</script>

<style scoped>
.how-section {
  background: var(--black);
  color: var(--white);
  padding: 100px 60px;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 12px;
}

.section-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.15;
  letter-spacing: -1px;
  max-width: 500px;
  color: var(--white);
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 64px;
}

.step {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 28px;
}

.step-num {
  font-family: 'DM Serif Display', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
  margin-bottom: 20px;
}

.step h4 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 12px;
  letter-spacing: -0.2px;
}

.step p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .how-section {
    padding: 64px 24px;
  }
  .steps {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
