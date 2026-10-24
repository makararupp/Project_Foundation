<template>
  <div v-if="story" class="story-page">
    <div class="wrap">
      <article class="story-article">
        <router-link class="back-link" to="/stories">← {{ t('storiesPage.back') }}</router-link>

        <div class="cats">
          <span v-for="c in story.cats" :key="c">{{ c }}</span>
        </div>
        <h1>{{ story.title }}</h1>
        <p class="story-lede">{{ story.text }}</p>

        <img class="story-photo" :src="storyImage(index)" alt="" />

        <!-- Optional full story: stories.items[n].body (a list of paragraphs) -->
        <div class="story-body">
          <p v-for="(para, i) in body" :key="i">{{ para }}</p>
        </div>
      </article>

      <!-- More stories -->
      <section v-if="more.length" class="more">
        <h2>{{ t('storiesPage.more') }}</h2>
        <div class="more-grid">
          <StoryCard v-for="s in more" :key="s.index" :story="s.story" :index="s.index" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import StoryCard from './components/StoryCard.vue'
import { storyImage } from './stories.js'

const props = defineProps({
  id: { type: String, required: true }, // story number from the URL, starting at 1
})

const { t, tm } = useI18n()
const router = useRouter()

const stories = computed(() => {
  const items = tm('stories.items')
  return Array.isArray(items) ? items : []
})

const index = computed(() => Number(props.id) - 1)
const story = computed(() => stories.value[index.value] || null)

// Unknown story number → back to the list
watchEffect(() => {
  if (stories.value.length && !story.value) router.replace('/stories')
})

const body = computed(() => (Array.isArray(story.value?.body) ? story.value.body : []))

// Up to 3 other stories
const more = computed(() =>
  stories.value
    .map((s, i) => ({ story: s, index: i }))
    .filter((s) => s.index !== index.value)
    .slice(0, 3),
)
</script>

<style scoped>
.story-page {
  background: var(--surface);
  padding: 56px 0 96px;
}

.story-article {
  max-width: 820px;
  margin: 0 auto 80px;
}

.back-link {
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 28px;
}

.back-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.story-article h1 {
  font-family: var(--serif);
  font-size: clamp(34px, 4.6vw, 60px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin: 12px 0 20px;
}

.story-lede {
  font-size: clamp(20px, 2.2vw, 26px);
  line-height: 1.5;
  color: var(--muted);
  margin: 0 0 36px;
}

.story-photo {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 36px;
}

.story-body p {
  font-size: 20px;
  line-height: 1.75;
  margin: 0 0 24px;
}

/* More stories */
.more {
  border-top: 6px solid var(--ink);
  padding-top: 24px;
}

.more h2 {
  margin: 0 0 28px;
}

.more-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* Undo the home page layout (first story wide) from layout.css: all cards equal here */
.more-grid :deep(.story) {
  grid-column: auto;
}

.more-grid :deep(.story:first-child .ph) {
  aspect-ratio: 4 / 3;
}

/* Category labels above the title (same look as on the cards) */
.story-article > .cats {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.story-article > .cats span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 2px 12px;
  font-size: 14px;
  color: var(--muted);
}

@media (max-width: 860px) {
  .more-grid {
    grid-template-columns: 1fr;
  }
}
</style>
