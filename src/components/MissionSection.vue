<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="mission" aria-label="Mission">
    <div class="wrap">
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
