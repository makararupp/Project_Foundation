<template>
  <section class="programs" id="programs">
    <div class="wrap">
      <div class="programs-layout">
        <div>
          <div class="sec-head">
            <h2>{{ t('programs.heading') }}</h2>
            <router-link class="link" to="/programs">{{ t('programs.viewAll') }}</router-link>
          </div>
          <ul class="programs-list">
            <li v-for="item in translatedPrograms" :key="item.name">
              <router-link to="/programs">
                {{ item.name }}
                <span>{{ item.tag }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Google Map of the campus, right of the program list -->
        <div class="programs-map">
          <iframe
            :src="location.mapEmbedUrl"
            :title="t('campus.mapTitle')"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { programs, location } from '../data/content.js'

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

/* Wider map: list 1 part, map 1.8 parts (layout.css default is 1fr 1.3fr) */
.programs-layout {
  grid-template-columns: 1fr 1.8fr;
  gap: 88px; /* space between the list and the map */
}

/* Bigger program names and labels (layout.css default: 24px / 15px) */
.programs-list a {
  font-size: 28px;
}

.programs-list a span {
  font-size: 17px;
}

/* Map fills the right column, as tall as the program list */
.programs-map {
  min-height: 420px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--sky);
}

.programs-map iframe {
  width: 100%;
  height: 100%;
  min-height: 420px;
  border: 0;
  display: block;
}

@media (max-width: 860px) {
  .programs-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .programs-list a {
    font-size: 24px;
  }
  .programs-list a span {
    font-size: 15px;
  }
  .programs-map,
  .programs-map iframe {
    min-height: 320px;
  }
}
</style>
