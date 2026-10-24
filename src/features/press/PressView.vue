<template>
  <div class="press-page">
    <div class="wrap">
      <header class="press-head">
        <h1>{{ t('press.title') }}</h1>
        <p>{{ t('press.intro') }}</p>
        <a class="contact-btn" :href="contactHref">{{ t('press.contact') }}</a>
      </header>

      <section class="resources">
        <h2>{{ t('press.resourcesHeading') }}</h2>
        <ul class="resource-grid">
          <li v-for="r in resources" :key="r.id" class="resource">
            <h3>{{ t(`press.resources.${r.id}`) }}</h3>
            <router-link v-if="r.href.startsWith('/')" class="learn-more" :to="r.href">
              {{ t('press.learnMore') }} <span aria-hidden="true">→</span>
            </router-link>
            <a v-else-if="r.href" class="learn-more" :href="r.href" target="_blank" rel="noopener noreferrer">
              {{ t('press.learnMore') }} <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { contactHref, resources } from './press.js'

const { t } = useI18n()
</script>

<style scoped>
.press-page {
  background: var(--surface);
  padding: 72px 0 96px;
}

.press-head {
  border-bottom: 6px solid var(--ink);
  padding-bottom: 32px;
  margin-bottom: 28px;
}

.press-head h1 {
  font-family: var(--sans);
  font-size: clamp(44px, 6.4vw, 84px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}

.press-head p {
  font-size: clamp(19px, 1.9vw, 24px);
  line-height: 1.5;
  max-width: 52ch;
  margin: 0 0 20px;
}

.contact-btn {
  display: inline-block;
  border: 1.5px solid var(--ink);
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.contact-btn:hover {
  background: var(--ink);
  color: var(--on-ink);
}

/* Heading on the left, 2-column grid of resources on the right */
.resources {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
}

.resources h2 {
  font-family: var(--sans);
  font-size: 28px;
  font-weight: 800;
  margin: 0;
}

.resource-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 220px));
  gap: 36px;
}

.resource {
  border-top: 1px solid var(--ink);
  padding-top: 16px;
}

.resource h3 {
  font-family: var(--sans);
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 24px;
}

.learn-more {
  font-weight: 700;
  text-decoration: none;
}

.learn-more:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (max-width: 860px) {
  .resources {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .resource-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }
}

@media (max-width: 480px) {
  .resource-grid {
    grid-template-columns: 1fr;
  }
}
</style>
