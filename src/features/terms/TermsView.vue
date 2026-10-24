<template>
  <div class="terms-page">
    <div class="wrap">
      <header class="terms-head">
        <h1>{{ t('terms.title') }}</h1>
        <p class="updated">{{ t('terms.updatedLabel') }}: {{ t('terms.updated') }}</p>
      </header>

      <div class="terms-body">
        <p class="intro">{{ t('terms.intro') }}</p>

        <section v-for="(s, i) in sections" :key="i" class="terms-section">
          <h2>{{ s.heading }}</h2>
          <p v-for="(para, j) in s.paragraphs" :key="j">{{ para }}</p>
        </section>

        <!-- Contact details come from the footer data, so they stay in sync -->
        <address class="contact">
          <template v-for="line in address" :key="line">{{ line }}<br></template>
          <a :href="footer.phoneHref">{{ footer.phone }}</a>
        </address>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer } from '../../data/content.js'

const { t, tm } = useI18n()

const sections = computed(() => {
  const list = tm('terms.sections')
  return Array.isArray(list) ? list : []
})

const address = computed(() => {
  const addr = tm('footer.address')
  return Array.isArray(addr) ? addr : footer.address
})
</script>

<style scoped>
.terms-page {
  background: var(--surface);
  padding: 56px 0 96px;
}

.terms-head {
  border-bottom: 6px solid var(--ink);
  padding-bottom: 24px;
  margin-bottom: 40px;
}

.terms-head h1 {
  font-family: var(--serif);
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.015em;
  margin: 0 0 12px;
}

.updated {
  font-family: var(--sans);
  font-size: 15px;
  color: var(--muted);
  margin: 0;
}

/* Comfortable reading width */
.terms-body {
  max-width: 760px;
}

.intro {
  font-size: 22px;
  line-height: 1.55;
  margin: 0 0 40px;
}

.terms-section {
  margin-bottom: 36px;
}

.terms-section h2 {
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 12px;
}

.terms-section p {
  font-size: 19px;
  line-height: 1.65;
  color: var(--muted);
  margin: 0 0 14px;
}

.contact {
  font-style: normal;
  font-weight: 600;
  line-height: 1.6;
  margin-top: -20px;
}
</style>
