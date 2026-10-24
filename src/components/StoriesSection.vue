<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import StoryCard from '../features/stories/components/StoryCard.vue'

const { t, tm } = useI18n()

// Dynamically get translated stories based on current locale
const translatedStories = computed(() => {
  const items = tm('stories.items')
  return Array.isArray(items) ? items : []
})
</script>

<template>
  <section id="stories" style="padding-top:28px">
    <div class="wrap">
      <div class="sec-head">
        <h2>{{ t('stories.heading') }}</h2>
        <router-link class="link" to="/stories">{{ t('stories.viewAll') }}</router-link>
      </div>
      <div class="stories-grid">
        <StoryCard v-for="(story, i) in translatedStories" :key="i" :story="story" :index="i" :wide="i === 0" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#stories {
  background: var(--surface);
  border-block: 1px solid var(--line);
}
</style>
