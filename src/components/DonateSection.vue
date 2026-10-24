<template>
  <!-- Donate Section -->
  <section class="donate" id="donate">
    <div class="wrap">
      <h2>{{ t('donate.heading') }}</h2>
      <p>{{ t('donate.text') }}</p>
      <button class="btn" @click="isOpen = true">{{ t('donate.btn') }}</button>
    </div>
  </section>

  <DonateModal :open="isOpen" @close="isOpen = false" />
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DonateModal from './DonateModal.vue'

const { t } = useI18n()
const isOpen = ref(false)
</script>
