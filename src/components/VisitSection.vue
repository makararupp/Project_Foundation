<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const visitImages = [
  { src: '/images/visit1.jpg', alt: 'The campus' },
  { src: '/images/visit2.jpg', alt: 'The museum' },
]
</script>

<template>
  <section id="visit">
    <div class="wrap">
      <div class="sec-head"><h2>{{ t('visit.heading') }}</h2></div>
      <div class="two">
        <article>
          <div class="ph visit-ph">
            <img :src="visitImages[0].src" :alt="visitImages[0].alt" class="visit-img" />
          </div>
          <h3>{{ t('visit.theCampus') }}</h3>
          <p>{{ t('visit.theCampusText') }}</p>
          <a class="link" href="#">{{ t('visit.theCampusLink') }}</a>
        </article>

        <article>
          <div class="ph visit-ph">
            <img :src="visitImages[1].src" :alt="visitImages[1].alt" class="visit-img" />
          </div>
          <h3>{{ t('visit.theMuseum') }}</h3>
          <p>{{ t('visit.theMuseumText') }}</p>
          <a class="link" href="#">{{ t('visit.theMuseumLink') }}</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.visit-ph {
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 20px;
  background: var(--sky);
  cursor: pointer;
}
.visit-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}
.visit-ph:hover .visit-img { transform: scale(1.04); }
</style>
