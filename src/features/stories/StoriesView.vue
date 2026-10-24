<template>
  <div class="stories-page">
    <div class="wrap">
      <header class="stories-head">
        <span class="stories-tag">{{ t('storiesPage.tag') }}</span>
        <h1>{{ t('stories.heading') }}</h1>
        <p>{{ t('storiesPage.intro') }}</p>
      </header>

      <!-- Category filters -->
      <div class="filters" role="group" :aria-label="t('storiesPage.filterLabel')">
        <button
          v-for="c in categories"
          :key="c.value"
          type="button"
          class="filter"
          :class="{ active: active === c.value }"
          :aria-pressed="active === c.value"
          @click="active = c.value"
        >
          {{ c.label }}
        </button>
      </div>

      <div class="stories-list">
        <StoryCard v-for="s in shown" :key="s.index" :story="s.story" :index="s.index" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import StoryCard from './components/StoryCard.vue'

const { t, tm, locale } = useI18n()

const stories = computed(() => {
  const items = tm('stories.items')
  return Array.isArray(items) ? items : []
})

// '' means "All"
const active = ref('')
watch(locale, () => { active.value = '' }) // category names change with the language

const categories = computed(() => {
  const unique = [...new Set(stories.value.flatMap((s) => s.cats || []))]
  return [{ value: '', label: t('storiesPage.all') }, ...unique.map((c) => ({ value: c, label: c }))]
})

// Keep each story's original position so links and photos stay correct
const shown = computed(() =>
  stories.value
    .map((story, index) => ({ story, index }))
    .filter(({ story }) => !active.value || (story.cats || []).includes(active.value)),
)
</script>

<style scoped>
.stories-page {
  background: var(--surface);
  padding: 64px 0 96px;
}

.stories-head {
  border-bottom: 6px solid var(--ink);
  padding-bottom: 28px;
  margin-bottom: 28px;
}

.stories-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--leaf);
  margin-bottom: 16px;
}

.stories-head h1 {
  font-family: var(--serif);
  font-size: clamp(40px, 5.6vw, 76px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.015em;
  margin: 0 0 16px;
}

.stories-head p {
  font-size: clamp(19px, 2vw, 23px);
  color: var(--muted);
  max-width: 50ch;
  margin: 0;
}

/* Filters */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

.filter {
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 999px;
  border: 1.5px solid var(--line);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.filter:hover {
  border-color: var(--ink);
}

.filter.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--on-ink);
}

/* 3 per row */
.stories-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 28px;
}

/* Undo the home page layout (first story wide) from layout.css: all cards equal here */
.stories-list :deep(.story) {
  grid-column: auto;
}

.stories-list :deep(.story:first-child .ph) {
  aspect-ratio: 4 / 3;
}

@media (max-width: 860px) {
  .stories-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .stories-list {
    grid-template-columns: 1fr;
  }
}
</style>
