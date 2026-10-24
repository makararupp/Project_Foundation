<template>
  <div class="info-page">
    <!-- Title and intro, then a wide photo -->
    <section class="info-hero">
      <div class="wrap">
        <span class="info-tag">{{ t(`${ns}.tag`) }}</span>
        <h1>{{ t(`${ns}.title`) }}</h1>
        <p class="info-intro">{{ t(`${ns}.intro`) }}</p>
        <img class="info-image" :src="image" :alt="t(`${ns}.imageAlt`)" />
      </div>
    </section>

    <!-- Three cards -->
    <section class="info-section">
      <div class="wrap">
        <h2>{{ t(`${ns}.featuresHeading`) }}</h2>
        <div class="feature-grid">
          <article v-for="(f, i) in features" :key="i" class="feature">
            <span class="feature-num">0{{ i + 1 }}</span>
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Page-specific content -->
    <slot />

    <!-- Call to action -->
    <section class="info-cta">
      <div class="wrap">
        <h2>{{ t(`${ns}.ctaHeading`) }}</h2>
        <p>{{ t(`${ns}.cta`) }}</p>
        <div class="cta-buttons">
          <router-link class="btn" :to="primaryTo">{{ t(`${ns}.ctaPrimary`) }}</router-link>
          <router-link class="btn ghost" :to="secondaryTo">{{ t(`${ns}.ctaSecondary`) }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Shared layout for simple information pages (programs, volunteer…)
const props = defineProps({
  ns: { type: String, required: true },             // locale section with this page's text
  image: { type: String, required: true },          // main photo
  primaryTo: { type: String, default: '/#signup' }, // first button in the dark section
  secondaryTo: { type: String, default: '/faq' },   // second button in the dark section
})

const { t, tm } = useI18n()

const features = computed(() => {
  const list = tm(`${props.ns}.features`)
  return Array.isArray(list) ? list : []
})
</script>

<style scoped>
.info-page h2 {
  font-family: var(--serif);
  font-size: clamp(30px, 3.6vw, 44px);
  font-weight: 600;
  line-height: 1.15;
  margin: 0 0 32px;
}

/* Hero */
.info-hero {
  background: var(--surface);
  padding: 64px 0 88px;
}

.info-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--leaf);
  margin-bottom: 16px;
}

.info-hero h1 {
  font-family: var(--serif);
  font-size: var(--hero-title-size);
  line-height: var(--hero-title-lh);
  letter-spacing: var(--hero-title-ls);
  font-weight: 600;
  margin: 0 0 20px;
}

.info-intro {
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.5;
  max-width: 48ch;
  color: var(--muted);
  margin: 0 0 40px;
}

.info-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 20px;
}

/* White sections with thin lines; :slotted so page-specific sections match */
.info-section,
:slotted(.info-section) {
  background: var(--surface);
  border-block: 1px solid var(--line);
  padding: 88px 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature {
  border-top: 4px solid var(--sun);
  padding-top: 20px;
}

.feature-num {
  font-family: var(--text);
  font-size: 14px;
  color: var(--muted);
}

.feature h3 {
  font-family: var(--serif);
  font-size: 28px;
  margin: 8px 0 12px;
}

.feature p {
  font-size: 18px;
  color: var(--muted);
  margin: 0;
}

/* CTA */
.info-cta {
  background: var(--ink);
  color: var(--on-ink);
  text-align: center;
  padding: 88px 0;
}

.info-cta p {
  max-width: 44ch;
  margin: 0 auto 32px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.info-cta .btn.ghost {
  color: var(--on-ink);
  border-color: var(--on-ink);
}

@media (max-width: 860px) {
  .info-hero {
    padding: 40px 0 56px;
  }
  .info-section,
  :slotted(.info-section),
  .info-cta {
    padding: 56px 0;
  }
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
