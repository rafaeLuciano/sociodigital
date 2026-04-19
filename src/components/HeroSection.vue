<template>
  <section class="hero">
    <div class="hero-bg-text">SD</div>
    <div class="hero-content">
      <p class="hero-eyebrow fade-up">Braço digital do seu negócio</p>
      <h1 class="fade-up delay-1">O digital que falta<br>no seu <em>negócio</em></h1>
      <p class="hero-sub fade-up delay-2">
        Sites, posts, design, social media e o que mais precisar — entregue rápido, sem contrato, sem complicação.
      </p>
      <div class="hero-actions fade-up delay-3">
        <a href="#contato" class="btn-primary">Começar agora</a>
        <a href="#servicos" class="btn-ghost">Ver serviços →</a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 60px 80px;
  position: relative;
  overflow: hidden;
}

.hero-eyebrow {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-eyebrow::before {
  content: '';
  display: block;
  width: 28px;
  height: 1px;
  background: var(--green);
}

.hero h1 {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 1.05;
  letter-spacing: -2px;
  max-width: 820px;
  color: var(--black);
  margin-bottom: 32px;
}

.hero h1 em {
  font-style: italic;
  color: var(--green);
}

.hero-sub {
  font-size: 1.1rem;
  font-weight: 300;
  color: #555;
  max-width: 460px;
  line-height: 1.7;
  margin-bottom: 48px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--black);
  color: var(--white);
  padding: 16px 36px;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: background 0.2s, transform 0.15s;
  display: inline-block;
}

.btn-primary:hover {
  background: var(--green);
  transform: translateY(-1px);
}

.btn-ghost {
  color: var(--black);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.btn-ghost:hover {
  opacity: 1;
}

.hero-bg-text {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'DM Serif Display', serif;
  font-size: 22vw;
  color: var(--cream);
  line-height: 1;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

@media (max-width: 900px) {
  .hero {
    padding: 120px 24px 60px;
  }
  .hero-bg-text {
    display: none;
  }
}
</style>
