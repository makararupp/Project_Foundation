<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const experienceImages = [
  { src: '/images/event.jpg', alt: 'Programs and events' },
  { src: '/images/volunteer.jpg', alt: 'Volunteer' },
  { src: '/images/member.jpg', alt: 'Membership' },
]
</script>

<template>
  <section class="experience">
    <div class="wrap">
      <div class="sec-head"><h2>{{ t('experience.heading') }}</h2></div>
      <div class="three">
        <article>
          <div class="ph ex-ph">
            <img :src="experienceImages[0].src" :alt="experienceImages[0].alt" class="ex-img" />
          </div>
          <h3>{{ t('experience.item1Title') }}</h3>
          <p>{{ t('experience.item1Text') }}</p>
          <router-link class="link" to="/programs">{{ t('experience.item1Link') }}</router-link>
        </article>

        <article>
          <div class="ph ex-ph">
            <img :src="experienceImages[1].src" :alt="experienceImages[1].alt" class="ex-img" />
          </div>
          <h3>{{ t('experience.item2Title') }}</h3>
          <p>{{ t('experience.item2Text') }}</p>
          <router-link class="link" to="/volunteer">{{ t('experience.item2Link') }}</router-link>
        </article>

        <article>
          <div class="ph ex-ph">
            <img :src="experienceImages[2].src" :alt="experienceImages[2].alt" class="ex-img" />
          </div>
          <h3>{{ t('experience.item3Title') }}</h3>
          <p>{{ t('experience.item3Text') }}</p>
          <router-link class="link" to="/donate">{{ t('experience.item3Link') }}</router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ex-ph {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 18px;
  background: var(--sky);
  cursor: pointer;
}
.ex-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}
.ex-ph:hover .ex-img { transform: scale(1.05); }
</style>