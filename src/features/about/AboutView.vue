<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="about-hero">
      <div class="wrap">
        <span class="about-tag">{{ t('about.tag') }}</span>
        <h1>{{ t('about.title') }}</h1>
        <p class="about-lede">{{ t('about.lede') }}</p>
      </div>
    </section>

    <!-- Mission statement -->
    <section class="about-mission">
      <div class="wrap">
        <h2 class="eyebrow">{{ t('about.missionLabel') }}</h2>
        <p class="mission-statement">{{ t('about.mission') }}</p>
        <router-link class="link" to="/mission">{{ t('about.missionLink') }} →</router-link>
      </div>
    </section>

    <!-- Our story -->
    <section class="about-story">
      <div class="wrap split">
        <h2>{{ t('about.storyHeading') }}</h2>
        <div>
          <p v-for="(para, i) in story" :key="i">{{ para }}</p>
        </div>
      </div>
    </section>

    <!-- What we do -->
    <section class="about-pillars">
      <div class="wrap">
        <h2>{{ t('about.pillarsHeading') }}</h2>
        <div class="pillar-grid">
          <article v-for="(p, i) in pillars" :key="p.title" class="pillar">
            <span class="pillar-num">0{{ i + 1 }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="about-values">
      <div class="wrap split">
        <h2>{{ t('about.valuesHeading') }}</h2>
        <dl class="value-list">
          <div v-for="v in values" :key="v.title" class="value">
            <dt>{{ v.title }}</dt>
            <dd>{{ v.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Our home -->
    <section class="about-home">
      <div class="wrap split">
        <h2>{{ t('about.homeHeading') }}</h2>
        <div>
          <p>{{ t('about.home') }}</p>
          <address>
            <template v-for="line in address" :key="line">{{ line }}<br></template>
            <a :href="footer.phoneHref">{{ footer.phone }}</a>
          </address>
          <router-link class="link" to="/#visit">{{ t('about.homeLink') }} →</router-link>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="about-cta">
      <div class="wrap">
        <h2>{{ t('about.ctaHeading') }}</h2>
        <p>{{ t('about.cta') }}</p>
        <div class="cta-buttons">
          <router-link class="btn" to="/#donate">{{ t('about.ctaDonate') }}</router-link>
          <router-link class="btn ghost" to="/#signup">{{ t('about.ctaSignup') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer } from '../../data/content.js'

const { t, tm } = useI18n()

const asList = (key) => {
  const value = tm(key)
  return Array.isArray(value) ? value : []
}

const story = computed(() => asList('about.story'))
const pillars = computed(() => asList('about.pillars'))
const values = computed(() => asList('about.values'))
const address = computed(() => {
  const addr = tm('footer.address')
  return Array.isArray(addr) ? addr : footer.address
})
</script>

<style scoped>
.about-page section {
  padding: 88px 0;
}

.about-page h2 {
  font-family: var(--serif);
  font-size: clamp(30px, 3.6vw, 44px);
  font-weight: 600;
  line-height: 1.15;
  margin: 0 0 32px;
}

/* Hero */
.about-page .about-hero {
  background: var(--ink);
  color: var(--on-ink);
  padding: 112px 0 96px;
}

.about-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--sun);
  margin-bottom: 20px;
}

.about-hero h1 {
  font-family: var(--serif);
  font-size: var(--hero-title-size);
  line-height: var(--hero-title-lh);
  letter-spacing: var(--hero-title-ls);
  font-weight: 600;
  max-width: 16ch;
  margin: 0 0 28px;
}

.about-lede {
  font-size: clamp(20px, 2.2vw, 26px);
  max-width: 46ch;
  margin: 0;
  opacity: 0.9;
}

/* Mission */
.about-mission {
  background: var(--sky);
}

.eyebrow {
  font-family: var(--sans) !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--leaf);
  margin-bottom: 20px !important;
}

.mission-statement {
  font-size: clamp(26px, 3.4vw, 42px);
  line-height: 1.35;
  max-width: 30ch;
  margin: 0 0 32px;
}

/* Two-column sections */
.split {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 56px;
  align-items: start;
}

.split p {
  margin: 0 0 20px;
  color: var(--muted);
}

/* Pillars */
.about-pillars {
  background: var(--surface);
  border-block: 1px solid var(--line);
}

.pillar-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.pillar {
  border-top: 4px solid var(--sun);
  padding-top: 24px;
}

.pillar-num {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--muted);
}

.pillar h3 {
  font-family: var(--serif);
  font-size: 30px;
  margin: 8px 0 12px;
}

.pillar p {
  font-size: 18px;
  color: var(--muted);
  margin: 0;
}

/* Values */
.value-list {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.value dt {
  font-weight: 700;
  font-size: 19px;
  margin-bottom: 6px;
}

.value dd {
  margin: 0;
  color: var(--muted);
}

/* Home */
.about-home {
  background: var(--sky);
}

.about-home address {
  font-style: normal;
  font-weight: 600;
  margin: 0 0 24px;
}

/* CTA */
.about-page .about-cta {
  background: var(--ink);
  color: var(--on-ink);
  text-align: center;
}

.about-cta p {
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

.about-cta .btn.ghost {
  color: var(--on-ink);
  border-color: var(--on-ink);
}

@media (max-width: 860px) {
  .about-page section {
    padding: 56px 0;
  }
  .about-page .about-hero {
    padding: 72px 0 56px;
  }
  .split,
  .pillar-grid,
  .value-list {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
