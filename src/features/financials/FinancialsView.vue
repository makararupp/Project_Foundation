<template>
  <div class="financials-page">
    <div class="wrap">
      <!-- Title and text on the left, photo on the right, thin line between -->
      <section class="fin-hero">
        <div class="fin-text">
          <h1>{{ t('financials.title') }}</h1>
          <p>{{ t('financials.intro') }}</p>
        </div>
        <img class="fin-image" src="/images/rith.jpg" :alt="t('financials.imageAlt')" />
      </section>

      <!-- Documents grouped by year: heading left, years and PDF links right -->
      <section class="fin-reports">
        <h2>{{ t('financials.reportsHeading') }}</h2>
        <div>
          <div v-for="y in years" :key="y.year" class="year">
            <h3>{{ y.year }}</h3>
            <ul class="doc-list">
              <li v-for="doc in y.documents" :key="doc.type || doc.title">
                <!-- download: save the PDF instead of opening it; encodeURI: file names may contain spaces or commas -->
                <a v-if="doc.href" class="doc-link" :href="encodeURI(doc.href)" :download="fileName(doc.href)">
                  {{ docTitle(doc, y.year) }}
                  <span class="doc-arrow" aria-hidden="true">↓</span>
                </a>
                <span v-else class="doc-pending">
                  {{ docTitle(doc, y.year) }}
                  <em>({{ t('financials.comingSoon') }})</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { years } from './reports.js'

const { t } = useI18n()

// Own title if given, otherwise the translated standard title for its type
const docTitle = (doc, year) => doc.title || t(`financials.docs.${doc.type}`, { year })

// Name the downloaded file after the PDF itself, e.g. "/pdf/report.pdf" → "report.pdf"
const fileName = (href) => href.split('/').pop()
</script>

<style scoped>
.financials-page {
  background: var(--surface);
  padding: 72px 0 96px;
}

.fin-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 72px;
}

.fin-text {
  padding-right: 40px;
  border-right: 1px solid var(--ink);
}

.fin-text h1 {
  font-family: var(--serif);
  font-size: clamp(44px, 6vw, 84px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  margin: 0 0 32px;
  max-width: 9ch;
}

.fin-text p {
  font-size: clamp(18px, 1.7vw, 22px);
  line-height: 1.5;
  max-width: 40ch;
  margin: 0;
}

.fin-image {
  width: calc(100% - 24px);
  margin-left: 24px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: 50% 30%; /* keep the face in frame */
}

/* Explore by year */
.fin-reports {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 48px;
  border-top: 6px solid var(--ink);
  padding-top: 24px;
}

.fin-reports h2 {
  font-family: var(--serif);
  font-size: 32px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}

.year + .year {
  margin-top: 28px;
}

.year h3 {
  font-family: var(--serif);
  font-size: 36px;
  font-weight: 800;
  line-height: 1;
  margin: 0 0 16px;
}

.doc-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.doc-list li {
  margin-bottom: 16px;
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
}

.doc-link {
  text-decoration: none;
}

.doc-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.doc-arrow {
  display: inline-block;
  margin-left: 6px;
  font-size: 0.8em;
}

.doc-pending {
  color: var(--muted);
}

.doc-pending em {
  font-weight: 400;
  font-size: 0.8em;
}

@media (max-width: 860px) {
  .fin-hero,
  .fin-reports {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .fin-text {
    padding-right: 0;
    border-right: 0;
  }
  .fin-image {
    width: 100%;
    margin-left: 0;
  }
  .fin-hero {
    margin-bottom: 48px;
  }
}
</style>
