<template>
  <nav>
    <a href="#" class="logo">Sócio<span>Digital</span></a>
    <ul>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#como-funciona">Como funciona</a></li>
      <li><a href="#precos">Preços</a></li>
      <li><a href="#contato" class="nav-cta">Falar agora</a></li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background: rgba(247, 245, 240, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.logo {
  font-family: 'DM Serif Display', serif;
  font-size: 1.3rem;
  letter-spacing: -0.3px;
  color: var(--black);
  text-decoration: none;
}

.logo span {
  color: var(--green);
  font-style: italic;
}

ul {
  list-style: none;
  display: flex;
  gap: 36px;
  align-items: center;
}

ul a {
  text-decoration: none;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  transition: color 0.2s;
}

ul a:hover {
  color: var(--black);
}

.nav-cta {
  background: var(--black) !important;
  color: var(--white) !important;
  padding: 10px 22px;
  border-radius: 100px;
  font-weight: 500 !important;
  transition: background 0.2s !important;
}

.nav-cta:hover {
  background: var(--green) !important;
}

@media (max-width: 900px) {
  nav {
    padding: 18px 24px;
  }
  ul {
    display: none;
  }
}
</style>
