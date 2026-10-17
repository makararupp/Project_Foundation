<template>
  <div class="mission-page">
    <article class="mission-article wrap">
      <MissionIntro />
      <MilestoneStory v-for="m in milestones" :key="m.id" :milestone="m" />
    </article>
  </div>
</template>

<script setup>
import MissionIntro from './components/MissionIntro.vue'
import MilestoneStory from './components/MilestoneStory.vue'
import { milestones } from './milestones.js'
</script>

<style scoped>
.mission-page {
  background: var(--paper);
  min-height: 85vh;
  padding: 56px 0 96px;
}

.mission-article {
  max-width: 920px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 56px 64px;
  box-shadow: 0 12px 40px rgba(20, 33, 61, 0.05);
}

:root[data-theme="dark"] .mission-article {
  background: var(--surface);
}

@media (max-width: 860px) {
  .mission-page {
    padding: 32px 0 64px;
  }
  .mission-article {
    padding: 36px 22px;
    border-radius: 16px;
  }
}
</style>
