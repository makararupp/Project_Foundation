<template>
  <section class="programs" id="programs">
    <div class="wrap">
      <div class="programs-layout">
        <div>
          <div class="sec-head">
            <h2>{{ t('programs.heading') }}</h2>
            <a class="link" href="#">{{ t('programs.viewAll') }}</a>
          </div>
          <ul class="programs-list">
            <li v-for="item in translatedPrograms" :key="item.name">
              <a href="#">
                {{ item.name }}
                <span>{{ item.tag }}</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- <div class="ph" aria-hidden="true"></div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { programs } from '../data/content.js'

const { t, tm } = useI18n()

const translatedPrograms = computed(() => {
  const items = tm('programs.items')
  return Array.isArray(items) && items.length > 0 ? items : programs
})
</script>
<style scoped>
.programs {
  background: var(--surface);
  border-block: 1px solid var(--line);
}
</style>
