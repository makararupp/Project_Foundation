<template>
  <div class="mission-page">
    <article class="mission-article wrap">

      <div class="mission-badge">
        <span>{{ t('mission.tag') }}</span>
      </div>

      <h1 class="page-title">{{ t('mission.title') }}</h1>
      <div class="mission-divider"></div>

      <!-- Intro paragraph with emphasized statement -->
      <div class="lead-box">
        <p class="mission-lead">
          {{ t('mission.text1') }}
          <em class="keyword">{{ t('mission.learn') }}</em>{{ locale === 'zh' ? '、' : (locale === 'km' ? ' ' : ', ') }}
          <em class="keyword">{{ t('mission.lead') }}</em>
          {{ t('mission.and') }}
          <em class="keyword">{{ t('mission.connect') }}</em>
          {{ t('mission.text2') }}
        </p>
      </div>

      <!-- Long-form editorial body narrative -->
      <div class="article-content">
        <p class="article-paragraph">
          {{ t('mission.paragraph') }}
        </p>
        <blockquote class="article-quote">
          “{{ t('mission.quote') }}”
        </blockquote>
      </div>

      <!-- Feature Milestone Stories: one section per entry in `milestones` (see script below) -->
      <section v-for="m in milestones" :key="m.id" class="feature-story">
        <div class="feature-top-bar"></div>

        <div class="editorial-grid">
          <!-- Row 1: Left Milestone Header & Right Intro Paragraphs -->
          <div class="grid-left-header">
            <h2 class="feature-date">{{ storyDate(m.year, m.month) }}</h2>
            <p class="feature-subtitle">{{ t(`mission.milestones.${m.id}.subtitle`) }}</p>
          </div>
          <div class="grid-right-intro">
            <p v-html="t(`mission.milestones.${m.id}.p1`)"></p>
            <p v-if="te(`mission.milestones.${m.id}.p2`)" v-html="t(`mission.milestones.${m.id}.p2`)"></p>
          </div>

          <!-- Row 2: Left Portrait & Right Wide Image (optional) -->
          <template v-if="m.portrait || m.image">
            <div class="grid-left-media">
              <figure v-if="m.portrait" class="portrait-figure">
                <img :src="m.portrait" :alt="m.portraitAlt" class="portrait-img" />
                <figcaption class="portrait-caption">{{ t(`mission.milestones.${m.id}.caption`) }}</figcaption>
              </figure>
            </div>
            <div class="grid-right-media">
              <figure v-if="m.image" class="magazine-figure">
                <img :src="m.image" :alt="m.imageAlt" class="magazine-img" />
              </figure>
            </div>
          </template>

          <!-- Row 3: Empty Left & Right Continuation with Callout (optional) -->
          <template v-if="te(`mission.milestones.${m.id}.p3`) || te(`mission.milestones.${m.id}.callout`)">
            <div class="grid-left-empty" aria-hidden="true"></div>
            <div class="grid-right-continuation">
              <p v-if="te(`mission.milestones.${m.id}.p3`)" class="story-p">{{ t(`mission.milestones.${m.id}.p3`) }}</p>

              <div v-if="te(`mission.milestones.${m.id}.callout`)" class="story-callout">
                <p class="callout-text">{{ t(`mission.milestones.${m.id}.callout`) }}</p>
              </div>

              <p v-if="te(`mission.milestones.${m.id}.p4`)" class="story-p">{{ t(`mission.milestones.${m.id}.p4`) }}</p>
            </div>
          </template>
        </div>
      </section>
    </article>
  </div>
  
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, te, locale } = useI18n()

// Milestone stories, shown in this order. Each `id` matches `mission.milestones.<id>` in the locale files.
// Change `year` and `month` (1–12) here; `portrait` and `image` are optional.
const milestones = [
  {
    id: 'm1', year: 1974, month: 12,
    portrait: '/images/paul-and-me.png', portraitAlt: 'Paul Allen and Bill Gates',
    image: '/images/altair-popular-electronics.png', imageAlt: 'Popular Electronics Altair 8800',
  },
  { id: 'm2', year: 1975, month: 1 },
  { id: 'm3', year: 1975, month: 2 },
  { id: 'm4', year: 1975, month: 3 },
  { id: 'm5', year: 1975, month: 4 },
  { id: 'm6', year: 1975, month: 5 },
  { id: 'm7', year: 1975, month: 6 },
]

// Formats a milestone date in the current language, e.g. storyDate(1974, 12) → "December 1974"
const storyDate = (year, month) => {
  const date = new Date(year, month - 1)
  if (locale.value === 'km') {
    const fmt = (opts) => new Intl.DateTimeFormat('km-u-nu-khmr', opts).format(date)
    return `ខែ${fmt({ month: 'long' })} ឆ្នាំ ${fmt({ year: 'numeric' })}`
  }
  return new Intl.DateTimeFormat(locale.value, { year: 'numeric', month: 'long' }).format(date)
}
</script>

<style scoped>
.mission-page {
  background: var(--paper);
  min-height: 85vh;
  padding: 56px 0 96px;
}

.mission-article {
  max-width: 920px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 56px 64px;
  box-shadow: 0 12px 40px rgba(20, 33, 61, 0.05);
}

:root[data-theme="dark"] .mission-article {
  background: var(--surface);
}

.back-link {
  display: inline-block;
  color: var(--muted);
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 24px;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--ink);
  text-decoration: underline;
}

.mission-badge {
  display: inline-block;
  background: var(--sky);
  color: var(--ink);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.page-title {
  font-family: var(--serif);
  font-size: clamp(36px, 4.8vw, 56px);
  font-weight: 600;
  line-height: 1.15;
  color: var(--ink);
  margin: 0 0 16px 0;
  letter-spacing: -0.015em;
}

.mission-divider {
  width: 64px;
  height: 4px;
  background: var(--sun);
  border-radius: 2px;
  margin-bottom: 32px;
}

.lead-box {
  margin-bottom: 32px;
}

.mission-lead {
  font-family: var(--sans);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 400;
  line-height: 1.45;
  color: var(--ink);
  margin: 0;
}

.keyword {
  font-style: normal;
  font-weight: 700;
  color: var(--leaf);
  padding: 0 4px;
  background: linear-gradient(transparent 70%, rgba(242, 182, 50, 0.4) 70%);
}

.article-paragraph {
  font-size: 19px;
  line-height: 1.75;
  color: #3b4252;
  margin-bottom: 28px;
}

.article-quote {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(20px, 2.4vw, 25px);
  line-height: 1.55;
  color: var(--ink);
  border-left: 4px solid var(--sun);
  background: #f8fafc;
  padding: 24px 28px;
  border-radius: 0 16px 16px 0;
  margin: 32px 0 0;
}

:root[data-theme="dark"] .article-quote {
  background: #172037;
}

/* ── Gates Notes Editorial Milestone Feature ── */
.feature-story {
  margin-top: 64px;
}

.feature-top-bar {
  width: 100%;
  height: 1px;
  background: #cbd2dc;
  margin-bottom: 24px;
}

:root[data-theme="dark"] .feature-top-bar {
  background: #334155;
}

/* 2-Column Grid alignment matching user screenshot */
.editorial-grid {
  display: grid;
  grid-template-columns: 210px 1fr;
  column-gap: 48px;
  row-gap: 28px;
  align-items: start;
}

.feature-date {
  font-family: var(--sans);
  font-size: 25px;
  font-weight: 800;
  color: var(--ink);
  line-height: 1.2;
  margin: 0 0 6px 0;
  letter-spacing: -0.01em;
}

.feature-subtitle {
  font-family: var(--sans);
  font-size: 17px;
  font-weight: 500;
  color: #64748b;
  line-height: 1.35;
  margin: 0;
}

.grid-right-intro p,
.grid-right-continuation p {
  font-family: var(--serif);
  font-size: 18px;
  line-height: 1.7;
  color: var(--ink);
  margin: 0 0 18px 0;
}

:deep(.feature-story em) {
  font-style: italic;
  font-weight: inherit;
}

/* Left side portrait */
.portrait-figure {
  margin: 0;
  width: 145px;
}

.portrait-img {
  width: 100%;
  border-radius: 8px;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.portrait-caption {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-top: 8px;
  line-height: 1.3;
}

/* Right side magazine */
.magazine-figure {
  margin: 0;
  width: 100%;
}

.magazine-img {
  width: 100%;
  border-radius: 8px;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* Callout highlight box with top dark bar */
.story-callout {
  background: #f4ede9;
  border-top: 4px solid #14213d;
  padding: 30px 32px;
  margin: 28px 0;
  border-radius: 0 0 4px 4px;
}

.callout-text {
  font-family: var(--sans) !important;
  font-size: clamp(22px, 2.5vw, 27px) !important;
  font-weight: 700 !important;
  line-height: 1.32 !important;
  color: #14213d !important;
  margin: 0 !important;
  letter-spacing: -0.01em;
}

:root[data-theme="dark"] .story-callout {
  background: #1e293b;
  border-top-color: var(--sun);
}

:root[data-theme="dark"] .callout-text {
  color: #f1efe9 !important;
}

/* Responsive adjustments */
@media (max-width: 860px) {
  .mission-page {
    padding: 32px 0 64px;
  }
  .mission-article {
    padding: 36px 22px;
    border-radius: 16px;
  }
}

@media (max-width: 768px) {
  .editorial-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .grid-left-empty {
    display: none;
  }
  .portrait-figure {
    width: 150px;
  }
  .story-callout {
    padding: 24px 20px;
  }
}
</style>
