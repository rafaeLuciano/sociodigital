import { onMounted } from 'vue'

export function useScrollAnimation(selector) {
  onMounted(() => {
    const elements = document.querySelectorAll(selector)
    elements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach(el => observer.observe(el))
  })
}
