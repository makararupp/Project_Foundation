<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="about-hero">
      <div class="wrap hero-grid">
        <div>
          <span class="about-tag">{{ t('about.tag') }}</span>
          <h1>{{ t('about.title') }}</h1>
          <p class="about-lede">{{ t('about.lede') }}</p>
        </div>

        <!-- Video, right of the title -->
        <div class="video-frame">
          <!-- Our own cover (site fonts) until play is clicked; YouTube's player text can't be styled -->
          <button v-if="!playing" class="video-cover" type="button" @click="playing = true">
            <img :src="`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`" alt="" />
            <span class="video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="36" height="36"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
            </span>
            <span class="video-caption">
              <span class="video-caption-label">{{ t('about.videoLabel') }}</span>
              <span class="video-caption-title">{{ t('about.videoTitle') }}</span>
            </span>
          </button>
          <iframe
            v-else
            :src="`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`"
            :title="t('about.videoTitle')"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Mission statement -->
    <section class="about-mission">
      <div class="wrap mission-grid">
        <div>
          <h2 class="eyebrow">{{ t('about.missionLabel') }}</h2>
          <p class="mission-statement">{{ t('about.mission') }}</p>
          <router-link class="link" to="/mission">{{ t('about.missionLink') }} →</router-link>
        </div>
        <img class="mission-image" src="/images/event.jpg" :alt="t('about.missionImageAlt')" loading="lazy" />
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
            <img v-if="pillarImages[i]" class="pillar-image" :src="pillarImages[i]" :alt="p.title" loading="lazy" />
            <div class="pillar-body">
              <span class="pillar-num">0{{ i + 1 }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </div>
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
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer } from '../../data/content.js'

const { t, tm } = useI18n()

// YouTube video ID, from https://youtu.be/4dP6NUlXe-4
const videoId = '4dP6NUlXe-4'
const playing = ref(false)

const asList = (key) => {
  const value = tm(key)
  return Array.isArray(value) ? value : []
}

const story = computed(() => asList('about.story'))
const pillars = computed(() => asList('about.pillars'))
// One photo per "What we do" card, in the same order as about.pillars (Learn, Lead, Connect)
const pillarImages = ['/images/Learn.jpg', '/images/Lead.jpg', '/images/Connect.jpg']
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
  padding: 72px 0;
}

/* Title and text on the left, video on the right */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 56px;
  align-items: center;
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
  font-size: clamp(30px, 3.6vw, 46px);
  line-height: var(--hero-title-lh);
  letter-spacing: var(--hero-title-ls);
  font-weight: 600;
  margin: 0 0 24px;
}

.about-lede {
  font-size: clamp(18px, 1.8vw, 22px);
  max-width: 46ch;
  margin: 0;
  opacity: 0.9;
}

.video-frame {
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.video-cover {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: #000;
  color: #fff;
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.video-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Darken the bottom so the caption stays readable */
.video-cover::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 45%, rgba(10, 16, 32, 0.85));
}

.video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: var(--sun);
  color: #14213d;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;
}

.video-cover:hover .video-play {
  transform: translate(-50%, -50%) scale(1.08);
}

.video-caption {
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 28px;
  z-index: 1;
}

.video-caption-label {
  display: block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--sun);
  margin-bottom: 6px;
}

.video-caption-title {
  display: block;
  font-family: var(--serif);
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 600;
  line-height: 1.2;
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* Mission */
.about-mission {
  background: var(--surface);
  border-block: 1px solid var(--line);
}

.eyebrow {
  font-family: var(--serif) !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--leaf);
  margin-bottom: 20px !important;
}

/* Our story */
.about-story {
  background: var(--surface);
  border-block: 1px solid var(--line);
}

/* What guides us */
.about-values {
  background: var(--surface);
  border-block: 1px solid var(--line);
}

/* Text on the left, photo on the right, both centered vertically */
.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.mission-statement {
  font-size: clamp(24px, 2.8vw, 36px);
  line-height: 1.35;
  max-width: 30ch;
  margin: 0 0 32px;
}

.mission-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(20, 33, 61, 0.15);
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

.pillar-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 20px;
}

.pillar-body {
  border-top: 4px solid var(--sun);
  padding-top: 20px;
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
  background: var(--surface);
  border-block: 1px solid var(--line);
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
    padding: 56px 0;
  }
  .video-frame {
    border-radius: 16px;
  }
  .hero-grid,
  .mission-grid,
  .split,
  .pillar-grid,
  .value-list {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
