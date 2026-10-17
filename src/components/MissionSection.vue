<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="mission" id="mission" aria-label="Mission">
    <div class="wrap">
      <!-- Elegant Mission Card Container similar to Gates Notes / Editorial layout -->
      <div class="mission-card">
        <div class="mission-badge">
          <span>{{ t('mission.tag') }}</span>
        </div>

        <h2 class="mission-title">{{ t('mission.title') }}</h2>

        <div class="mission-divider"></div>

        <!-- Highlight statement with emphasized action verbs -->
        <p class="mission-lead">
          {{ t('mission.text1') }}
          <em class="keyword">{{ t('mission.learn') }}</em>,
          <em class="keyword">{{ t('mission.lead') }}</em>,
          {{ t('mission.and') }}
          <em class="keyword">{{ t('mission.connect') }}</em>
          {{ t('mission.text2') }}
        </p>

        <!-- Descriptive narrative paragraph -->
        <p class="mission-body">
          {{ t('mission.paragraph') }}
        </p>

        <!-- Signature quote callout -->
        <blockquote class="mission-quote">
          “{{ t('mission.quote') }}”
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission {
  background: var(--paper);
  padding: 100px 0;
  position: relative;
}

.mission-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 56px 48px;
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 0 20px 50px rgba(20, 33, 61, 0.06);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mission-card:hover {
  box-shadow: 0 24px 60px rgba(20, 33, 61, 0.09);
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

.mission-title {
  font-family: var(--serif);
  font-size: clamp(34px, 4.5vw, 54px);
  font-weight: 600;
  line-height: 1.15;
  margin: 0 0 16px 0;
  color: var(--ink);
  letter-spacing: -0.015em;
}

.mission-divider {
  width: 64px;
  height: 4px;
  background: var(--sun);
  border-radius: 2px;
  margin-bottom: 32px;
}

.mission-lead {
  font-family: var(--sans);
  font-size: clamp(22px, 2.8vw, 32px);
  font-weight: 400;
  line-height: 1.45;
  color: var(--ink);
  margin: 0 0 28px 0;
}

.keyword {
  font-style: normal;
  font-weight: 600;
  color: var(--leaf);
  position: relative;
  padding: 0 4px;
  background: linear-gradient(transparent 70%, rgba(242, 182, 50, 0.35) 70%);
}

.mission-body {
  font-size: 19px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 75ch;
  margin: 0 0 36px 0;
}

.mission-quote {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(18px, 2.2vw, 24px);
  line-height: 1.5;
  color: var(--ink);
  border-left: 4px solid var(--sun);
  padding: 12px 0 12px 24px;
  margin: 0;
  background: var(--paper);
  border-radius: 0 14px 14px 0;
}

@media (max-width: 860px) {
  .mission {
    padding: 60px 0;
  }
  .mission-card {
    padding: 36px 24px;
    border-radius: 18px;
  }
  .mission-body {
    font-size: 17px;
  }
}
</style>
