<template>
  <footer>
    <a href="#" class="footer-logo">Sócio<span>Digital</span></a>
    <div class="footer-links">
      <a href="https://www.instagram.com/sociodigitalservicos/" target="_blank">Instagram</a>
      <a href="https://wa.me/47988883216" target="_blank">WhatsApp</a>
      <a href="mailto:sociodigitalservicos@gmail.com">Email</a>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background: var(--black);
  color: rgba(255, 255, 255, 0.5);
  padding: 48px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-logo {
  font-family: 'DM Serif Display', serif;
  font-size: 1.2rem;
  color: var(--white);
  text-decoration: none;
}

.footer-logo span {
  color: var(--green);
  font-style: italic;
}

footer p {
  font-size: 0.8rem;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-size: 0.82rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--white);
}

@media (max-width: 900px) {
  footer {
    padding: 40px 24px;
  }
}
</style>
