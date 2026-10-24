<template>
  <div class="faq-page">
    <div class="wrap">
      <h1 class="faq-title">{{ t('faq.title') }}</h1>

      <!-- Intro on the left, hours and address on the right -->
      <div class="faq-intro">
        <p>{{ t('faq.intro') }}</p>
        <aside class="faq-info">
          <h2>{{ t('faq.infoHeading') }}</h2>
          <p v-if="campusHours">
            {{ campusHours.name }}<br>
            <template v-for="(line, i) in campusHours.lines" :key="i">{{ line }}<br></template>
          </p>
          <p>
            <template v-for="line in address" :key="line">{{ line }}<br></template>
          </p>
        </aside>
      </div>

      <img class="faq-image" src="/images/FAQ.jpg" :alt="t('faq.imageAlt')" />

      <!-- One section per group: heading on the left, questions on the right (click to open) -->
      <section v-for="(group, gi) in groups" :key="gi" class="faq-group">
        <h2>{{ group.heading }}</h2>
        <div class="faq-list">
          <details v-for="(item, i) in group.items" :key="i" class="faq-item">
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer } from '../../data/content.js'

const { t, tm } = useI18n()

const groups = computed(() => {
  const list = tm('faq.groups')
  return Array.isArray(list) ? list : []
})

// Hours and address come from the footer text, so they stay in sync
const campusHours = computed(() => {
  const hours = tm('footer.hours')
  return Array.isArray(hours) ? hours[0] : footer.hours[0]
})

const address = computed(() => {
  const addr = tm('footer.address')
  return Array.isArray(addr) ? addr : footer.address
})
</script>

<style scoped>
.faq-page {
  background: var(--surface);
  padding: 56px 0 96px;
}

.faq-title {
  font-family: var(--serif);
  font-size: clamp(40px, 6.4vw, 88px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.015em;
  margin: 0;
  padding-bottom: 32px;
  border-bottom: 6px solid var(--ink);
}

.faq-intro {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 48px;
  padding: 20px 0 32px;
}

.faq-intro > p {
  font-size: 17px;
  line-height: 1.55;
  max-width: 44ch;
  margin: 0;
}

.faq-info {
  border-left: 1px solid var(--ink);
  padding-left: 20px;
}

.faq-info h2 {
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 6px;
}

.faq-info p {
  font-size: 15px;
  line-height: 1.5;
  margin: 0 0 16px;
}

.faq-info p:last-child {
  margin-bottom: 0;
}

.faq-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin-bottom: 56px;
}

/* Question groups: thick line on top, heading left, questions right */
.faq-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  border-top: 6px solid var(--ink);
  padding-top: 12px;
  margin-bottom: 64px;
}

.faq-group h2 {
  font-family: var(--serif);
  font-size: 36px;
  font-weight: 600;
  margin: 8px 0 0;
}

.faq-item {
  border-bottom: 1px solid var(--ink);
}

.faq-item summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 600;
  line-height: 1.3;
  cursor: pointer;
  list-style: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

/* Small arrow on the right; flips when open */
.faq-item summary::after {
  content: "";
  flex-shrink: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
  transition: transform 0.2s ease;
}

.faq-item[open] summary::after {
  transform: rotate(180deg);
}

.faq-item p {
  font-size: 17px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0 0 20px;
}

@media (max-width: 860px) {
  .faq-intro {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .faq-image {
    margin-bottom: 40px;
  }
  .faq-group {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 48px;
  }
  .faq-item summary {
    font-size: 20px;
  }
}
</style>
