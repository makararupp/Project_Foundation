<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const storyImages = [
  { src: '/images/hero.jpg',   alt: 'Featured story' },
  { src: '/images/farmer.jpg',    alt: 'Story' },
  { src: '/images/young.jpg',    alt: 'Story' },
  { src: '/images/summer.jpg', alt: 'Story' },
  { src: '/images/map.jpg',    alt: 'Story' },
]

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
        <a class="link" href="#">{{ t('stories.viewAll') }}</a>
      </div>
      <div class="stories-grid">
        <article v-for="(story, i) in translatedStories" :key="i" class="story">
          <div class="ph story-ph" :class="{ 'story-ph--wide': i === 0 }">
            <img :src="storyImages[i] ? storyImages[i].src : storyImages[0].src" :alt="story.title" class="story-img" />
          </div>
          <div class="cats">
            <span v-for="c in story.cats" :key="c">{{ c }}</span>
          </div>
          <h3><a href="#">{{ story.title }}</a></h3>
          <p>{{ story.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-ph {
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 16px;
  background: var(--sky);
  cursor: pointer;
  aspect-ratio: 4 / 3;
}
.story-ph--wide { aspect-ratio: 16 / 9; }
.story-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}
.story-ph:hover .story-img { transform: scale(1.04); }
</style>