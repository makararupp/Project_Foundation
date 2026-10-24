<template>
  <InfoPage ns="volunteer" image="/images/volunteer.jpg" primary-to="/#signup" secondary-to="/faq">
    <!-- How to get started -->
    <section class="info-section">
      <div class="wrap">
        <h2>{{ t('volunteer.stepsHeading') }}</h2>
        <ol class="steps">
          <li v-for="(step, i) in steps" :key="i">
            <span class="step-num">{{ i + 1 }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </InfoPage>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoPage from '../../components/info/InfoPage.vue'

const { t, tm } = useI18n()

const steps = computed(() => {
  const list = tm('volunteer.steps')
  return Array.isArray(list) ? list : []
})
</script>

<style scoped>
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.steps li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-num {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--sun);
  color: #14213d;
  font-weight: 700;
  font-size: 18px;
}

.steps h3 {
  font-family: var(--serif);
  font-size: 24px;
  margin: 4px 0 8px;
}

.steps p {
  font-size: 18px;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 860px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
