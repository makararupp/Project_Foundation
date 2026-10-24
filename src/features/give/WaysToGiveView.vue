<template>
  <div class="give-page">
    <div class="wrap">
      <header class="give-head">
        <h1>{{ t('give.title') }}</h1>
        <p>{{ t('give.intro') }}</p>
      </header>

      <!-- Heading on the left, ways to give on the right -->
      <section class="give-ways">
        <h2>{{ t('give.waysHeading') }}</h2>
        <ul class="way-grid">
          <li v-for="way in ways" :key="way.id" class="way">
            <h3>{{ t(`give.ways.${way.id}.title`) }}</h3>
            <p>{{ t(`give.ways.${way.id}.text`) }}</p>

            <button v-if="way.donate" type="button" class="way-action" @click="openModal(way.donate)">
              {{ t(`give.ways.${way.id}.action`) }} <span aria-hidden="true">→</span>
            </button>
            <router-link v-else-if="way.to" class="way-action" :to="way.to">
              {{ t(`give.ways.${way.id}.action`) }} <span aria-hidden="true">→</span>
            </router-link>
            <a v-else class="way-action" :href="contactHref('Giving')">
              {{ t(`give.ways.${way.id}.action`) }} <span aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </section>

      <!-- Questions -->
      <section class="give-questions">
        <h2>{{ t('give.questionsHeading') }}</h2>
        <div>
          <p>{{ t('give.questionsText') }}</p>
          <p class="give-contact">
            <a :href="footer.phoneHref">{{ footer.phone }}</a>
            <router-link to="/faq">{{ t('give.faqLink') }} →</router-link>
          </p>
        </div>
      </section>
    </div>

    <DonateModal :open="modalOpen" :start-frequency="frequency" @close="modalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DonateModal from '../../components/DonateModal.vue'
import { footer, contactHref } from '../../data/content.js'

const { t } = useI18n()

// Each way's text is `give.ways.<id>` in ./locales. Action:
//   donate: opens the donation form on that tab ('once' | 'monthly')
//   to:     opens a page on this site
//   (none): contacts the Foundation (email if set in content.js, otherwise phone)
const ways = [
  { id: 'once', donate: 'once' },
  { id: 'monthly', donate: 'monthly' },
  { id: 'bank' },
  { id: 'tribute' },
  { id: 'partners' },
  { id: 'time', to: '/volunteer' },
]

const modalOpen = ref(false)
const frequency = ref('monthly')
function openModal(freq) {
  frequency.value = freq
  modalOpen.value = true
}
</script>

<style scoped>
.give-page {
  background: var(--surface);
  padding: 72px 0 96px;
}

/* Fonts follow the site settings: --serif for headings, --text for paragraphs */
.give-head {
  margin-bottom: 56px;
}

.give-head h1 {
  font-family: var(--serif);
  font-size: clamp(56px, 8vw, 112px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.01em;
  margin: 0 0 20px;
}

.give-head p {
  font-family: var(--text);
  font-size: clamp(19px, 2vw, 26px);
  line-height: 1.45;
  max-width: 52ch;
  margin: 0;
}

/* Ways */
.give-ways,
.give-questions {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 48px;
  border-top: 6px solid var(--ink);
  padding-top: 24px;
}

.give-ways {
  margin-bottom: 72px;
}

.give-ways h2,
.give-questions h2 {
  font-family: var(--serif);
  font-size: 32px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}

.way-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 36px;
}

.way {
  border-top: 1px solid var(--ink);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.way h3 {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 8px;
}

.way p {
  font-family: var(--text);
  font-size: 17px;
  line-height: 1.55;
  color: var(--muted);
  margin: 0 0 16px;
  flex: 1;
}

.way-action {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
}

.way-action:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Questions */
.give-questions p {
  font-family: var(--text);
  font-size: 18px;
  line-height: 1.55;
  margin: 0 0 12px;
}

.give-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-family: var(--serif) !important;
  font-size: 20px !important;
  font-weight: 700;
}

.give-contact a {
  text-decoration: none;
}

.give-contact a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (max-width: 860px) {
  .give-ways,
  .give-questions {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .way-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
