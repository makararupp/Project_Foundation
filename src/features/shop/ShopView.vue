<template>
  <div class="shop-page">
    <div class="wrap">
      <h1 class="shop-title">{{ t('shop.title') }}</h1>

      <!-- Three columns with thin lines between them -->
      <div class="shop-grid">
        <section class="shop-col store">
          <h2 class="store-heading">{{ t('shop.storeHeading') }}</h2>
          <p>{{ t('shop.storeText') }}</p>
          <p class="hours">
            <template v-for="(line, i) in storeHours" :key="i">{{ line }}<br></template>
          </p>
        </section>

        <section class="shop-col">
          <h2 class="col-heading">{{ t('shop.onlineHeading') }}</h2>
          <p>{{ t('shop.onlineText') }}</p>
          <a v-if="onlineShopUrl" class="shop-link" :href="onlineShopUrl" target="_blank" rel="noopener noreferrer">
            {{ t('shop.onlineLink') }} <span aria-hidden="true">↗</span>
          </a>
          <span v-else class="shop-soon">{{ t('shop.onlineSoon') }}</span>
        </section>

        <section class="shop-col">
          <h2 class="col-heading">{{ t('shop.supportHeading') }}</h2>
          <p>{{ t('shop.supportText') }}</p>
          <router-link class="shop-btn" to="/donate">{{ t('shop.supportButton') }}</router-link>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { onlineShopUrl } from './shop.js'

const { t, tm } = useI18n()

const storeHours = computed(() => {
  const lines = tm('shop.storeHours')
  return Array.isArray(lines) ? lines : []
})
</script>

<style scoped>
/* Fonts follow the site settings: --serif for the title and buttons, --text for paragraphs */
.shop-page {
  background: var(--surface);
  padding: 56px 0 96px;
}

.shop-title {
  font-family: var(--serif);
  font-size: clamp(56px, 8.4vw, 120px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.01em;
  margin: 0;
  padding-bottom: 48px;
  border-bottom: 10px solid var(--ink);
}

/* Wide first column, two narrower ones; vertical lines between */
.shop-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding-top: 40px;
}

.shop-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 36px;
  border-left: 1px solid var(--ink);
}

.shop-col:first-child {
  padding-left: 0;
  padding-right: 80px;
  border-left: 0;
}

.shop-col:last-child {
  padding-right: 0;
}

.shop-col p {
  font-family: var(--text);
  font-size: 17px;
  line-height: 1.5;
  margin: 0 0 20px;
}

.store-heading {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 24px;
}

.col-heading {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px;
}

.store p {
  max-width: 46ch;
}

.hours {
  margin-top: 8px !important;
}

/* Push the link/button to the bottom so both columns line up */
.shop-link,
.shop-btn,
.shop-soon {
  margin-top: auto;
}

.shop-link {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
}

.shop-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.shop-soon {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 700;
  color: var(--muted);
}

.shop-btn {
  display: inline-block;
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 700;
  background: var(--ink);
  color: var(--on-ink);
  padding: 12px 24px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.shop-btn:hover {
  opacity: 0.85;
}

@media (max-width: 860px) {
  .shop-title {
    padding-bottom: 28px;
    border-bottom-width: 6px;
  }
  .shop-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .shop-col,
  .shop-col:first-child {
    padding: 0;
    border-left: 0;
  }
  .shop-col + .shop-col {
    border-top: 1px solid var(--ink);
    padding-top: 24px;
  }
  .shop-link,
  .shop-btn,
  .shop-soon {
    margin-top: 4px;
  }
}
</style>
