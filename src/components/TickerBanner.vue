<template>
  <div class="ticker">
    <div class="ticker-track">
      <span v-for="(item, i) in tickerItems" :key="'a' + i">{{ item }}</span>
      <!-- duplicate for seamless loop -->
      <span v-for="(item, i) in tickerItems" :key="'b' + i">{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
const tickerItems = [
  'Sites',
  '·',
  'Posts para Instagram',
  '·',
  'Design de artes',
  '·',
  'Identidade visual',
  '·',
  'Gestão de redes sociais',
  '·',
  'Landing Pages',
  '·',
  'Roteiros e legendas',
  '·',
  'Apresentações',
  '·',
]
</script>

<style scoped>
.ticker {
  background: var(--black);
  color: var(--white);
  padding: 14px 0;
  overflow: hidden;
  white-space: nowrap;
}

.ticker-track {
  display: inline-flex;
  gap: 60px;
  animation: ticker 20s linear infinite;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.8;
}
</style>
