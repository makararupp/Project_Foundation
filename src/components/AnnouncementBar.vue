<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="notice" role="region" :aria-label="t('announcement.highlight')">
    <div class="wrap">
      <p><strong>{{ t('announcement.highlight') }}</strong> {{ t('announcement.text') }}</p>
      <a href="/#signup">{{ t('announcement.link') }}</a>
    </div>
  </div>
</template>
