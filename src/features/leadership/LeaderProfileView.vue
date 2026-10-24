<template>
  <div v-if="person" class="profile-page">
    <div class="wrap">
      <header class="profile-head">
        <h1>{{ person.name }}</h1>
        <router-link class="back-link" to="/leadership">{{ t('leadership.title') }}</router-link>
      </header>

      <div class="profile-body">
        <LeaderPhoto :person="person" />
        <div class="bio">
          <p class="role">{{ t(`leadership.roles.${person.id}`) }}</p>
          <p v-for="(para, i) in bio" :key="i">{{ para }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LeaderPhoto from './components/LeaderPhoto.vue'
import { findLeader } from './leaders.js'

const props = defineProps({
  id: { type: String, required: true },
})

const { t, tm } = useI18n()
const router = useRouter()

const person = computed(() => findLeader(props.id))

// Unknown id (e.g. /leadership/xyz) → back to the leadership list
watchEffect(() => {
  if (!person.value) router.replace('/leadership')
})

// Use the person's own bio if written, otherwise the placeholder text
const bio = computed(() => {
  const own = tm(`leadership.bios.${props.id}`)
  if (Array.isArray(own) && own.length) return own
  const placeholder = tm('leadership.bioPlaceholder')
  return Array.isArray(placeholder) ? placeholder : []
})
</script>

<style scoped>
.profile-page {
  background: var(--surface);
  padding: 72px 0 96px;
}

.profile-head {
  border-bottom: 6px solid var(--ink);
  padding-bottom: 28px;
  margin-bottom: 16px;
}

.profile-head h1 {
  font-family: var(--serif);
  font-size: clamp(40px, 5.6vw, 72px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}

.back-link {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Photo left, bio right */
.profile-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: start;
}

.bio p {
  font-size: 17px;
  line-height: 1.65;
  margin: 0 0 20px;
}

.bio .role {
  font-style: italic;
  margin-bottom: 24px;
}

@media (max-width: 860px) {
  .profile-body {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
