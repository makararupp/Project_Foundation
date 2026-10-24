<template>
  <InfoPage ns="programsPage" image="/images/event.jpg" primary-to="/#signup" secondary-to="/volunteer">
    <!-- All programs (home page "View all programs" jumps here) -->
    <section id="all-programs" class="info-section">
      <div class="wrap">
        <h2>{{ t('programsPage.listHeading') }}</h2>
        <ul class="program-list">
          <li v-for="p in programList" :key="p.name">
            <span class="program-name">{{ p.name }}</span>
            <span class="program-tag">{{ p.tag }}</span>
          </li>
        </ul>
      </div>
    </section>
  </InfoPage>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoPage from '../../components/info/InfoPage.vue'
import { programs } from '../../data/content.js'

const { t, tm } = useI18n()

// Same list as the home page Programs section
const programList = computed(() => {
  const items = tm('programs.items')
  return Array.isArray(items) && items.length > 0 ? items : programs
})
</script>

<style scoped>
.program-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
}

.program-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
}

.program-name {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 600;
}

.program-tag {
  font-size: 15px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
}

@media (max-width: 860px) {
  .program-list {
    grid-template-columns: 1fr;
  }
}
</style>
