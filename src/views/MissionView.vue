<template>
  <div class="mission-page">
    <!-- Main Editorial Article Container (Gates Notes Style) -->
    <article class="mission-article wrap">
      <router-link to="/" class="back-link">
      </router-link>

      <div class="mission-badge">
        <span>{{ t('mission.tag') }}</span>
      </div>

      <h1 class="page-title">{{ t('mission.title') }}</h1>
      <div class="mission-divider"></div>
      <!-- Intro paragraph with emphasized statement -->
      <div class="lead-box">
        <p class="mission-lead">
          {{ t('mission.text1') }}
          <em class="keyword">{{ t('mission.learn') }}</em>、
          <em class="keyword">{{ t('mission.lead') }}</em>
          {{ t('mission.and') }}
          <em class="keyword">{{ t('mission.connect') }}</em>
          {{ t('mission.text2') }}
        </p>
      </div>

      <hr class="article-divider" />

      <!-- Long-form editorial body narrative -->
      <div class="article-content">
        <p class="article-paragraph">
          {{ t('mission.paragraph') }}
        </p>  
        
      </div>
    </article>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.mission-page {
  background: var(--paper);
  min-height: 85vh;
  padding: 60px 0 96px;
}

.back-link {
  display: inline-block;
  color: var(--ink);
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 24px;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--leaf);
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
  margin-bottom: 36px;
}

/* ── Article Layout (Gates Notes style) ── */
.mission-article {
  max-width: 860px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 56px 64px;
  box-shadow: 0 16px 48px rgba(20, 33, 61, 0.06);
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

.article-divider {
  border: none;
  border-top: 1px solid var(--line);
  margin: 36px 0;
}

.article-paragraph {
  font-size: 20px;
  line-height: 1.75;
  color: #3b4252;
  margin-bottom: 40px;
}

.article-quote {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(20px, 2.4vw, 26px);
  line-height: 1.5;
  color: var(--ink);
  border-left: 4px solid var(--sun);
  background: var(--paper);
  padding: 24px 28px;
  border-radius: 0 16px 16px 0;
  margin: 40px 0;
}

/* ── 3 Pillars Grid ── */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.pillar-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 28px 20px;
  text-align: left;
}

.pillar-num {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 700;
  color: var(--sun);
  margin-bottom: 8px;
}

.pillar-card h3 {
  font-family: var(--serif);
  font-size: 22px;
  margin: 0 0 10px;
  color: var(--ink);
  text-transform: capitalize;
}

.pillar-card p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 860px) {
  .mission-article {
    padding: 32px 20px;
    margin-top: 24px;
    border-radius: 16px;
  }
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}
</style>

