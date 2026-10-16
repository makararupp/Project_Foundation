<template>
  <a class="skip" href="#main">Skip to content</a>
  <AnnouncementBar />
  <SiteHeader />
  <main id="main">
    <router-view />
  </main>
  <SiteFooter />
</template>

<script setup>
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import AnnouncementBar from './components/AnnouncementBar.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const { locale } = useI18n()

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', locale.value)
  }
})
</script>
