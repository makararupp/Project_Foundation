<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="mission" id="mission" aria-label="Mission">
    <div class="wrap">
      <div class="sec-head">
        <h2>{{ t('mission.title') }}</h2>
      </div>
      <p>
        {{ t('mission.text1') }}
        <em>{{ t('mission.learn') }}</em>,
        <em>{{ t('mission.lead') }}</em>, and
        <em>{{ t('mission.connect') }}</em>
        {{ t('mission.text2') }}
      </p>
    </div>
  </section>
</template>
