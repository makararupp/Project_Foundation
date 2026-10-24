<template>
  <header>
    <div class="mission-badge">
      <span>{{ t('mission.tag') }}</span>
    </div>

    <h1 class="page-title">{{ t('mission.title') }}</h1>
    <div class="mission-divider"></div>

    <!-- Intro paragraph with emphasized statement -->
    <div class="lead-box">
      <p class="mission-lead">
        {{ t('mission.text1') }}
        <em class="keyword">{{ t('mission.learn') }}</em>{{ t('mission.separator') }}
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
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
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
  font-family: var(--text);
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
</style>
