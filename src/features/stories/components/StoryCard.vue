<template>
  <!-- Uses the shared .story styles from layout.css -->
  <article class="story">
    <router-link :to="storyPath(index)" class="ph story-ph" :class="{ 'story-ph--wide': wide }" tabindex="-1" aria-hidden="true">
      <img :src="storyImage(index)" alt="" class="story-img" loading="lazy" />
    </router-link>
    <div class="cats">
      <span v-for="c in story.cats" :key="c">{{ c }}</span>
    </div>
    <h3><router-link :to="storyPath(index)">{{ story.title }}</router-link></h3>
    <p>{{ story.text }}</p>
  </article>
</template>

<script setup>
import { storyImage, storyPath } from '../stories.js'

defineProps({
  story: { type: Object, required: true },
  index: { type: Number, required: true }, // position in stories.items
  wide: { type: Boolean, default: false },  // 16:9 photo instead of 4:3
})
</script>

<style scoped>
.story-ph {
  display: block;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 16px;
  background: var(--sky);
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
