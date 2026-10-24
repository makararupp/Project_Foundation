<template>
  <div class="donate-page">
    <!-- Hero: text left, photo right -->
    <section class="donate-hero">
      <div class="wrap hero-grid">
        <div>
          <span class="donate-tag">{{ t('donatePage.tag') }}</span>
          <h1>{{ t('donatePage.title') }}</h1>
          <p class="donate-intro">{{ t('donatePage.intro') }}</p>
          <button class="btn" type="button" @click="openModal('monthly')">{{ t('donatePage.giveNow') }}</button>
        </div>
        <img class="hero-image" src="/images/event.jpg" :alt="t('donatePage.imageAlt')" />
      </div>
    </section>

    <!-- Where your gift goes -->
    <section class="donate-section">
      <div class="wrap">
        <h2>{{ t('donatePage.impactHeading') }}</h2>
        <div class="impact-grid">
          <article v-for="(item, i) in impact" :key="i" class="impact">
            <span class="impact-num">0{{ i + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Ways to give -->
    <section class="donate-section">
      <div class="wrap">
        <h2>{{ t('donatePage.waysHeading') }}</h2>
        <div class="ways-grid">
          <article v-for="way in ways" :key="way.id" class="way">
            <h3>{{ way.title }}</h3>
            <p>{{ way.text }}</p>
            <router-link v-if="way.id === 'volunteer'" class="btn ghost" to="/#signup">{{ way.action }}</router-link>
            <button v-else class="btn" type="button" @click="openModal(way.id)">{{ way.action }}</button>
          </article>
        </div>
      </div>
    </section>

    <!-- Questions -->
    <section class="donate-questions">
      <div class="wrap">
        <h2>{{ t('donatePage.questionsHeading') }}</h2>
        <p>{{ t('donatePage.questionsText') }}</p>
        <router-link class="link" to="/faq">{{ t('donatePage.questionsLink') }} →</router-link>
      </div>
    </section>

    <DonateModal :open="modalOpen" :start-frequency="frequency" @close="modalOpen = false" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DonateModal from '../../components/DonateModal.vue'

const { t, tm } = useI18n()

const asList = (key) => {
  const value = tm(key)
  return Array.isArray(value) ? value : []
}

const impact = computed(() => asList('donatePage.impact'))
const ways = computed(() => asList('donatePage.ways'))

// Opens the shared donation form on the "Give once" or "Monthly" tab
const modalOpen = ref(false)
const frequency = ref('monthly')
function openModal(freq) {
  frequency.value = freq
  modalOpen.value = true
}
</script>

<style scoped>
.donate-page h2 {
  font-family: var(--serif);
  font-size: clamp(30px, 3.6vw, 44px);
  font-weight: 600;
  line-height: 1.15;
  margin: 0 0 32px;
}

/* Hero */
.donate-hero {
  background: var(--ink);
  color: var(--on-ink);
  padding: 72px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.donate-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--sun);
  margin-bottom: 20px;
}

.donate-hero h1 {
  font-family: var(--serif);
  font-size: clamp(36px, 4.4vw, 60px);
  line-height: var(--hero-title-lh);
  font-weight: 600;
  margin: 0 0 24px;
}

.donate-intro {
  font-size: clamp(18px, 1.8vw, 22px);
  max-width: 44ch;
  margin: 0 0 32px;
  opacity: 0.9;
}

.hero-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

/* White sections with thin lines, like the About page */
.donate-section {
  background: var(--surface);
  border-block: 1px solid var(--line);
  padding: 88px 0;
}

.impact-grid,
.ways-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.impact {
  border-top: 4px solid var(--sun);
  padding-top: 20px;
}

.impact-num {
  font-family: var(--text);
  font-size: 14px;
  color: var(--muted);
}

.impact h3,
.way h3 {
  font-family: var(--serif);
  font-size: 28px;
  margin: 8px 0 12px;
}

.impact p,
.way p {
  font-size: 18px;
  color: var(--muted);
  margin: 0;
}

.way {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 28px;
}

.way p {
  flex: 1;
  margin-bottom: 24px;
}

/* Questions */
.donate-questions {
  background: var(--sky);
  padding: 72px 0;
  text-align: center;
}

.donate-questions h2 {
  margin-bottom: 12px;
}

.donate-questions p {
  margin: 0 0 20px;
  color: var(--muted);
}

@media (max-width: 860px) {
  .donate-hero {
    padding: 56px 0;
  }
  .donate-section {
    padding: 56px 0;
  }
  .hero-grid,
  .impact-grid,
  .ways-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
