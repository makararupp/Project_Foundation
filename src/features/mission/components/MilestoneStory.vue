<template>
  <section class="feature-story">
    <div class="feature-top-bar"></div>

    <!-- Column layout (layout: 'column'): header on top, one text column with an inline image -->
    <div v-if="milestone.layout === 'column'" class="column-story">
      <div class="column-header">
        <h2 class="feature-date">{{ formatMilestoneDate(milestone.year, milestone.month, locale) }}</h2>
        <p class="feature-subtitle">{{ t(key('subtitle')) }}</p>
      </div>

      <div class="column-body">
        <p v-html="t(key('p1'))"></p>
        <p v-if="has('p2')" v-html="t(key('p2'))"></p>

        <figure v-if="milestone.image" class="column-figure">
          <img :src="milestone.image" :alt="milestone.imageAlt" class="column-img" />
          <figcaption v-if="has('caption')" class="column-caption">{{ t(key('caption')) }}</figcaption>
        </figure>

        <p v-if="has('p3')" v-html="t(key('p3'))"></p>
        <p v-if="has('p4')" v-html="t(key('p4'))"></p>
      </div>

      <div v-if="has('callout')" class="story-callout column-callout">
        <p class="callout-text">{{ t(key('callout')) }}</p>
      </div>
    </div>

    <!-- Pair layout (layout: 'pair'): header on top, one text column, then two images side by side -->
    <div v-else-if="milestone.layout === 'pair'" class="column-story">
      <div class="column-header">
        <h2 class="feature-date">{{ formatMilestoneDate(milestone.year, milestone.month, locale) }}</h2>
        <p class="feature-subtitle">{{ t(key('subtitle')) }}</p>
      </div>

      <div class="column-body">
        <p v-html="t(key('p1'))"></p>
        <p v-if="has('p2')" v-html="t(key('p2'))"></p>
      </div>

      <div v-if="milestone.images" class="pair-grid">
        <figure v-for="(img, i) in milestone.images" :key="img.src" class="pair-figure">
          <img :src="img.src" :alt="img.alt" class="pair-img" />
          <figcaption v-if="has(`caption${i + 1}`)" class="column-caption">{{ t(key(`caption${i + 1}`)) }}</figcaption>
        </figure>
      </div>
    </div>

    <!-- Photo layout (layout: 'photo'): header on top, then a centered column with the image first and text below -->
    <div v-else-if="milestone.layout === 'photo'" class="column-story">
      <div class="column-header">
        <h2 class="feature-date">{{ formatMilestoneDate(milestone.year, milestone.month, locale) }}</h2>
        <p class="feature-subtitle">{{ t(key('subtitle')) }}</p>
      </div>

      <div class="photo-body">
        <figure v-if="milestone.image" class="photo-figure">
          <img :src="milestone.image" :alt="milestone.imageAlt" class="photo-img" />
          <figcaption v-if="has('caption')" class="column-caption">{{ t(key('caption')) }}</figcaption>
        </figure>

        <p v-html="t(key('p1'))"></p>
        <p v-if="has('p2')" v-html="t(key('p2'))"></p>
        <p v-if="has('p3')" v-html="t(key('p3'))"></p>
      </div>
    </div>

    <div v-else class="editorial-grid">
      <!-- Row 1: Left Milestone Header & Right Intro Paragraphs -->
      <div class="grid-left-header">
        <h2 class="feature-date">{{ formatMilestoneDate(milestone.year, milestone.month, locale) }}</h2>
        <p class="feature-subtitle">{{ t(key('subtitle')) }}</p>
      </div>
      <div class="grid-right-intro">
        <p v-html="t(key('p1'))"></p>
        <p v-if="has('p2')" v-html="t(key('p2'))"></p>
      </div>

      <!-- Row 2: Left Portrait & Right Wide Image (optional) -->
      <template v-if="milestone.portrait || milestone.image">
        <div class="grid-left-media">
          <figure v-if="milestone.portrait" class="portrait-figure">
            <img :src="milestone.portrait" :alt="milestone.portraitAlt" class="portrait-img" />
            <figcaption v-if="has('caption')" class="portrait-caption">{{ t(key('caption')) }}</figcaption>
          </figure>
        </div>
        <div class="grid-right-media">
          <figure v-if="milestone.image" class="magazine-figure">
            <img :src="milestone.image" :alt="milestone.imageAlt" class="magazine-img" />
          </figure>
        </div>
      </template>

      <!-- Row 3: Empty Left & Right Continuation with Callout (optional) -->
      <template v-if="has('p3') || has('callout')">
        <div class="grid-left-empty" aria-hidden="true"></div>
        <div class="grid-right-continuation">
          <p v-if="has('p3')" class="story-p">{{ t(key('p3')) }}</p>

          <div v-if="has('callout')" class="story-callout">
            <p class="callout-text">{{ t(key('callout')) }}</p>
          </div>

          <p v-if="has('p4')" class="story-p">{{ t(key('p4')) }}</p>
        </div>
      </template>    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { formatMilestoneDate } from '../formatMilestoneDate.js'

// `milestone` is one entry from ../milestones.js
const props = defineProps({
  milestone: { type: Object, required: true },
})

const { t, te, locale } = useI18n()

// Locale key for a field of this milestone, e.g. key('p1') → "mission.milestones.m1.p1"
const key = (field) => `mission.milestones.${props.milestone.id}.${field}`
const has = (field) => te(key(field))
</script>

<style scoped>
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

/* 2-column grid: date/subtitle on the left, story on the right */
.editorial-grid {
  display: grid;
  grid-template-columns: 210px 1fr;
  column-gap: 48px;
  row-gap: 28px;
  align-items: start;
}

.feature-date {
  font-family: var(--serif);
  font-size: 25px;
  font-weight: 800;
  color: var(--ink);
  line-height: 1.2;
  margin: 0 0 6px 0;
  letter-spacing: -0.01em;
}

.feature-subtitle {
  font-family: var(--text);
  font-size: 20px;
  font-weight: 500;
  color: #64748b;
  line-height: 1.35;
  margin: 0;
}

.grid-right-intro p,
.grid-right-continuation p {
  font-family: var(--text);
  font-size: 20px;
  line-height: 1.7;
  color: var(--ink);
  margin: 0 0 18px 0;
}

/* Column layout: text column indented past the header, callout slightly wider */
.column-header {
  margin-bottom: 28px;
}

.column-body,
.column-callout {
  margin-left: calc(210px + 48px);
  max-width: 560px;
}

.column-callout {
  max-width: 720px;
  margin-top: 12px;
}

.column-body p {
  font-family: var(--text);
  font-size: 20px;
  line-height: 1.7;
  color: var(--ink);
  margin: 0 0 18px 0;
}

.column-figure {
  margin: 8px 0 28px 0;
}

.column-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.column-caption {
  font-family: var(--text);
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-top: 8px;
  line-height: 1.3;
}

/* Pair layout: two images side by side, full width */
.pair-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  margin-top: 16px;
}

.pair-figure {
  margin: 0;
}

.pair-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* Photo layout: narrow column centered on the page, image above the text */
.photo-body {
  max-width: 460px;
  margin: 48px auto 0;
}

.photo-body p {
  font-family: var(--text);
  font-size: 20px;
  line-height: 1.7;
  color: var(--ink);
  margin: 0 0 18px 0;
}

.photo-figure {
  margin: 0 0 28px 0;
}

.photo-img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 6px;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* <em> and <a> inside v-html text from the locale files */
.feature-story :deep(em) {
  font-style: italic;
  font-weight: inherit;
}

.feature-story :deep(a) {
  color: #d9480f;
  text-decoration: none;
}

.feature-story :deep(a:hover) {
  text-decoration: underline;
}

:root[data-theme="dark"] .feature-story :deep(a) {
  color: #ff8a4c;
}

/* Wrap long titles instead of running across the page */
.column-header .feature-subtitle {
  max-width: 500px;
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
  font-family: var(--text);
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-top: 8px;
  line-height: 1.3;
}

/* Right side wide image */
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
  font-family: var(--text) !important;
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
  .column-body,
  .column-callout {
    margin-left: 0;
    max-width: none;
  }
  .pair-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .photo-body {
    margin-top: 0;
  }
}

/* Tablet: shrink the indent so the column keeps a readable width */
@media (min-width: 769px) and (max-width: 1024px) {
  .column-body,
  .column-callout {
    margin-left: 80px;
  }
}
</style>
