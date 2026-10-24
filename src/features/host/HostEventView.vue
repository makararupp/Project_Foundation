<template>
  <div class="host-page">
    <div class="wrap">
      <header class="host-head">
        <h1>{{ t('host.title') }}</h1>
        <p>{{ t('host.intro') }}</p>
        <!-- No booking form yet: the request goes by email (or phone until an email is set in content.js) -->
        <a class="request-btn" :href="contactHref('Event booking request')">{{ t('host.request') }}</a>
      </header>

      <img class="host-image" src="/images/campus.jpg" alt="" />

      <!-- Event types -->
      <section class="host-row">
        <h2>{{ t('host.typesHeading') }}</h2>
        <ul class="type-grid">
          <li v-for="(item, i) in types" :key="i" class="type">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </section>

      <!-- Booking steps -->
      <section class="host-row">
        <h2>{{ t('host.stepsHeading') }}</h2>
        <ol class="steps">
          <li v-for="(step, i) in steps" :key="i">
            <span class="step-num">{{ i + 1 }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- Questions -->
      <section class="host-row">
        <h2>{{ t('host.questionsHeading') }}</h2>
        <div>
          <p class="questions-text">{{ t('host.questionsText') }}</p>
          <p class="host-contact">
            <a :href="footer.phoneHref">{{ footer.phone }}</a>
            <router-link to="/faq">{{ t('host.faqLink') }} →</router-link>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer, contactHref } from '../../data/content.js'

const { t, tm } = useI18n()

const asList = (key) => {
  const value = tm(key)
  return Array.isArray(value) ? value : []
}

const types = computed(() => asList('host.types'))
const steps = computed(() => asList('host.steps'))
</script>

<style scoped>
/* Fonts follow the site settings: --serif for headings, --text for paragraphs */
.host-page {
  background: var(--surface);
  padding: 72px 0 96px;
}

.host-head {
  margin-bottom: 48px;
}

.host-head h1 {
  font-family: var(--serif);
  font-size: clamp(52px, 7.6vw, 108px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.01em;
  margin: 0 0 20px;
}

.host-head p {
  font-family: var(--text);
  font-size: clamp(19px, 2vw, 26px);
  line-height: 1.45;
  max-width: 56ch;
  margin: 0 0 24px;
}

/* Outlined button, like the reference design */
.request-btn {
  display: inline-block;
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 700;
  padding: 10px 24px;
  border: 1.5px solid var(--ink);
  color: var(--ink);
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.request-btn:hover {
  background: var(--ink);
  color: var(--on-ink);
}

.host-image {
  width: 100%;
  aspect-ratio: 21 / 9;
  object-fit: cover;
  margin-bottom: 72px;
}

/* Rows: thick line on top, heading left, content right */
.host-row {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 48px;
  border-top: 6px solid var(--ink);
  padding-top: 24px;
  margin-bottom: 72px;
}

.host-row:last-child {
  margin-bottom: 0;
}

.host-row h2 {
  font-family: var(--serif);
  font-size: 32px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}

.type-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 36px;
}

.type {
  border-top: 1px solid var(--ink);
  padding-top: 16px;
}

.type h3,
.steps h3 {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 8px;
}

.type p,
.steps p,
.questions-text {
  font-family: var(--text);
  font-size: 17px;
  line-height: 1.55;
  color: var(--muted);
  margin: 0;
}

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.steps li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.step-num {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--sun);
  color: #14213d;
  font-weight: 700;
}

.questions-text {
  margin-bottom: 12px;
}

.host-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.host-contact a {
  text-decoration: none;
}

.host-contact a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (max-width: 860px) {
  .host-row {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .type-grid,
  .steps {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .host-image {
    aspect-ratio: 4 / 3;
    margin-bottom: 48px;
  }
}
</style>
