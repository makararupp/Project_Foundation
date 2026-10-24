<template>
  <div class="place-page">
    <!-- Title and intro, then a wide photo -->
    <section class="place-hero">
      <div class="wrap">
        <span class="place-tag">{{ t(`${ns}.tag`) }}</span>
        <h1>{{ t(`${ns}.title`) }}</h1>
        <p class="place-intro">{{ t(`${ns}.intro`) }}</p>
        <img class="place-image" :src="image" :alt="t(`${ns}.imageAlt`)" />
      </div>
    </section>

    <!-- What you'll find -->
    <section class="place-section">
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

    <!-- Plan your visit: hours and address left, tips right -->
    <section class="place-section">
      <div class="wrap">
        <h2>{{ t(`${ns}.planHeading`) }}</h2>
        <div class="plan-grid">
          <div class="plan-info">
            <h3>{{ t(`${ns}.hoursHeading`) }}</h3>
            <p v-if="placeHours">
              <template v-for="(line, i) in placeHours.lines" :key="i">{{ line }}<br></template>
            </p>

            <h3>{{ t(`${ns}.addressHeading`) }}</h3>
            <address>
              <template v-for="line in address" :key="line">{{ line }}<br></template>
              <a :href="footer.phoneHref">{{ footer.phone }}</a>
            </address>
            <a class="link" :href="location.directionsUrl" target="_blank" rel="noopener noreferrer">
              {{ t(`${ns}.directions`) }} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div>
            <h3>{{ t(`${ns}.tipsHeading`) }}</h3>
            <ul class="tips">
              <li v-for="(tip, i) in tips" :key="i">{{ tip }}</li>
            </ul>
            <router-link class="link" to="/faq">{{ t(`${ns}.faqLink`) }} →</router-link>
          </div>
        </div>

        <!-- Google Map of the location -->
        <div class="map-frame">
          <iframe
            :src="location.mapEmbedUrl"
            :title="t(`${ns}.mapTitle`)"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="place-cta">
      <div class="wrap">
        <h2>{{ t(`${ns}.ctaHeading`) }}</h2>
        <p>{{ t(`${ns}.cta`) }}</p>
        <div class="cta-buttons">
          <router-link class="btn" :to="ctaTo">{{ t(`${ns}.ctaPrimary`) }}</router-link>
          <router-link class="btn ghost" to="/#signup">{{ t(`${ns}.ctaSignup`) }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer, location } from '../../data/content.js'

// One page layout for each place people can visit (campus, museum…)
const props = defineProps({
  ns: { type: String, required: true },          // locale section with this page's text
  image: { type: String, required: true },       // main photo
  hoursIndex: { type: Number, default: 0 },      // which entry of footer.hours to show
  ctaTo: { type: String, default: '/#visit' },   // where the first button in the dark section goes
})

const { t, tm } = useI18n()

const asList = (key) => {
  const value = tm(key)
  return Array.isArray(value) ? value : []
}

const features = computed(() => asList(`${props.ns}.features`))
const tips = computed(() => asList(`${props.ns}.tips`))

// Hours and address come from the footer text, so they stay in sync
const placeHours = computed(() => {
  const hours = tm('footer.hours')
  return Array.isArray(hours) ? hours[props.hoursIndex] : footer.hours[props.hoursIndex]
})

const address = computed(() => {
  const addr = tm('footer.address')
  return Array.isArray(addr) ? addr : footer.address
})

</script>

<style scoped>
.place-page h2 {
  font-family: var(--serif);
  font-size: clamp(30px, 3.6vw, 44px);
  font-weight: 600;
  line-height: 1.15;
  margin: 0 0 32px;
}

/* Hero */
.place-hero {
  background: var(--surface);
  padding: 64px 0 88px;
}

.place-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--leaf);
  margin-bottom: 16px;
}

.place-hero h1 {
  font-family: var(--serif);
  font-size: var(--hero-title-size);
  line-height: var(--hero-title-lh);
  letter-spacing: var(--hero-title-ls);
  font-weight: 600;
  margin: 0 0 20px;
}

.place-intro {
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.5;
  max-width: 48ch;
  color: var(--muted);
  margin: 0 0 40px;
}

.place-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 20px;
}

/* White sections with thin lines, like the About page */
.place-section {
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
  font-family: var(--mono);
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

/* Plan your visit */
.plan-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
}

.plan-grid h3 {
  font-family: var(--serif);
  font-size: 24px;
  margin: 0 0 8px;
}

.plan-info p,
.plan-info address {
  font-style: normal;
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 24px;
}

.tips {
  margin: 0 0 24px;
  padding-left: 20px;
}

.tips li {
  font-family: var(--text);
  font-size: 19px;
  line-height: 1.6;
  color: var(--muted);
  margin-bottom: 12px;
}

.map-frame {
  margin-top: 56px;
  aspect-ratio: 16 / 7;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--sky);
}

.map-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* CTA */
.place-cta {
  background: var(--ink);
  color: var(--on-ink);
  text-align: center;
  padding: 88px 0;
}

.place-cta p {
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

.place-cta .btn.ghost {
  color: var(--on-ink);
  border-color: var(--on-ink);
}

@media (max-width: 860px) {
  .place-hero {
    padding: 40px 0 56px;
  }
  .place-section,
  .place-cta {
    padding: 56px 0;
  }
  .feature-grid,
  .plan-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .map-frame {
    margin-top: 32px;
    aspect-ratio: 4 / 3;
    border-radius: 16px;
  }
}
</style>
