<template>
  <div class="leadership-page">
    <div class="wrap">
      <header class="leadership-head">
        <h1>{{ t('leadership.title') }}</h1>
        <p>{{ t('leadership.intro') }}</p>
      </header>

      <section v-for="team in teams" :key="team.id" class="team">
        <h2>{{ t(`leadership.teams.${team.id}`) }}</h2>
        <ul class="people">
          <li v-for="person in team.members" :key="person.id" class="person">
            <router-link class="person-link" :to="`/leadership/${person.id}`">
              <LeaderPhoto :person="person" />
              <h3>{{ person.name }}</h3>
            </router-link>
            <p>{{ t(`leadership.roles.${person.id}`) }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LeaderPhoto from './components/LeaderPhoto.vue'
import { teams } from './leaders.js'

const { t } = useI18n()
</script>

<style scoped>
.leadership-page {
  background: var(--surface);
  padding: 72px 0 96px;
}

.leadership-head {
  border-bottom: 4px solid var(--ink);
  padding-bottom: 28px;
  margin-bottom: 32px;
}

.leadership-head h1 {
  font-family: var(--sans);
  font-size: clamp(40px, 5.6vw, 72px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
}

.leadership-head p {
  font-size: clamp(18px, 1.8vw, 22px);
  margin: 0;
}

/* Thick line between teams (above "Board of Directors") */
.team:not(:last-child) {
  border-bottom: 4px solid #2d3649;
  padding-bottom: 48px;
}

.team + .team {
  margin-top: 32px;
}

.team h2 {
  font-family: var(--sans);
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 24px;
}

/* 4 per row, with a thin line between columns */
.people {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
}

.person {
  padding: 0 20px;
  border-left: 1px solid var(--line);
}

.person:nth-child(4n + 1) {
  border-left: 0;
  padding-left: 0;
}

.person-link {
  display: block;
  text-decoration: none;
}

.person-link .leader-photo {
  margin-bottom: 12px;
  transition: opacity 0.2s ease;
}

.person-link:hover .leader-photo {
  opacity: 0.85;
}

.person-link:hover h3 {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.person h3 {
  font-family: var(--sans);
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 4px;
}

.person p {
  font-size: 15px;
  line-height: 1.4;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 860px) {
  .people {
    grid-template-columns: repeat(2, 1fr);
  }
  .person:nth-child(4n + 1) {
    border-left: 1px solid var(--line);
    padding-left: 20px;
  }
  .person:nth-child(2n + 1) {
    border-left: 0;
    padding-left: 0;
  }
}
</style>
