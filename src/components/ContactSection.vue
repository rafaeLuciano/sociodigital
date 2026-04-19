<template>
  <section class="cta-section" id="contato">
    <h2>Pronto para ter um <em>sócio digital</em>?</h2>
    <p>Conta o que você precisa. A gente responde em até 2 horas.</p>

    <div class="contact-form">
      <div v-if="errorMsg" class="form-error">{{ errorMsg }}</div>

      <div class="form-group">
        <label>Seu nome</label>
        <input v-model="form.name" type="text" placeholder="Como podemos te chamar?" />
      </div>
      <div class="form-group">
        <label>WhatsApp</label>
        <input v-model="form.phone" type="tel" placeholder="(11) 99999-9999" />
      </div>
      <div class="form-group">
        <label>O que você precisa?</label>
        <select v-model="form.service">
          <option value="">Selecione um serviço</option>
          <option>Site</option>
          <option>Landing Page</option>
          <option>Design & Artes</option>
          <option>Identidade Visual</option>
          <option>Textos & Legendas</option>
          <option>Social Media (gestão mensal)</option>
          <option>Apresentação</option>
          <option>Outro (me conta abaixo)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Detalhes (opcional)</label>
        <textarea
          v-model="form.details"
          placeholder="Quanto mais você contar, mais certeiro será nosso orçamento..."
        ></textarea>
      </div>
      <div
        class="form-submit"
        :class="{ submitted, loading }"
        @click="handleSubmit"
      >
        <span v-if="loading" class="spinner"></span>
        {{ loading ? 'Enviando...' : submitted ? 'Enviado! Em breve entraremos em contato ✓' : 'Enviar e receber orçamento →' }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// ─── CONFIGURE AQUI ────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY  = 'mEzvlDUV2uN9vTLnV'   // Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_ocr71io'   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_8uqboyu'  // Email Templates → Template ID
// ────────────────────────────────────────────────────────────────────

const submitted = ref(false)
const loading   = ref(false)
const errorMsg  = ref('')

const form = reactive({
  name:    '',
  phone:   '',
  service: '',
  details: '',
})

onMounted(() => {
  // Carrega o SDK do EmailJS dinamicamente
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
  script.onload = () => window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  document.head.appendChild(script)
})

async function handleSubmit() {
  if (submitted.value || loading.value) return

  if (!form.name || !form.phone || !form.service) {
    errorMsg.value = 'Preencha nome, WhatsApp e serviço antes de enviar.'
    return
  }

  errorMsg.value = ''
  loading.value  = true

  try {
    await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:   form.name,
      phone:       form.phone,
      service:     form.service,
      details:     form.details || '—',
      reply_to:    form.phone,
    })
    submitted.value = true
  } catch (err) {
    console.error('EmailJS error:', err)
    errorMsg.value = 'Erro ao enviar. Tente novamente ou fale pelo WhatsApp.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.cta-section {
  text-align: center;
  padding: 120px 60px;
}

.cta-section h2 {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section h2 em {
  font-style: italic;
  color: var(--green);
}

.cta-section > p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 44px;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 44px 40px;
  text-align: left;
}

.form-error {
  background: #fff0f0;
  border: 1px solid #f5c6c6;
  color: #c0392b;
  font-size: 0.84rem;
  padding: 10px 14px;
  border-radius: 10px;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  background: var(--white);
  color: var(--black);
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--black);
}

.form-group textarea {
  resize: none;
  height: 100px;
}

.form-submit {
  background: var(--black);
  color: var(--white);
  border: none;
  padding: 16px;
  border-radius: 100px;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
  text-align: center;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.form-submit:hover:not(.submitted):not(.loading) {
  background: var(--green);
}

.form-submit.submitted,
.form-submit.loading {
  background: var(--green);
  cursor: default;
}

/* Spinner */
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 900px) {
  .cta-section {
    padding: 80px 24px;
  }
  .contact-form {
    padding: 32px 24px;
  }
}
</style>