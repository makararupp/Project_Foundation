<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const index = ref(0)
let timer

const heroWords = computed(() => {
  const words = tm('hero.words')
  return Array.isArray(words) ? words : ['A campus', 'A museum', 'Art', 'Sports', 'Events']
})

watch(heroWords, () => {
  index.value = 0
})

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduce) {
    timer = setInterval(() => {
      if (heroWords.value.length) {
        index.value = (index.value + 1) % heroWords.value.length
      }
    }, 2600)
  }
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section class="hero" style="padding:0">
    <!-- Full background image -->
    <div class="hero-bg" aria-hidden="true">
      <img src="/images/hero.jpg" alt="" />
    </div>
    <!-- Gradient overlay for readability -->
    <div class="hero-overlay" aria-hidden="true"></div>

    <!-- Content -->
    <div class="wrap hero-content">
      <div>
        <span class="tag">{{ t('hero.tag') }}</span>
        <h1>{{ t('hero.title') }}
          <span class="swap" aria-live="off">
            <span :key="`${index}-${heroWords[index]}`">{{ heroWords[index] }}</span>
          </span>
        </h1>
        <p class="lede">{{ t('hero.lede') }}</p>
        <a class="btn" href="#visit">{{ t('hero.cta') }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Background image fills the full hero ── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 60%;
  display: block;
}

/* ── Dark gradient overlay — left heavy so text stays legible ── */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to right,
    rgba(10, 20, 45, 0.72) 0%,
    rgba(10, 20, 45, 0.40) 55%,
    rgba(10, 20, 45, 0.10) 100%
  );
}

/* ── Text content sits above the overlay ── */
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  min-height: 600px;
  padding-top: 80px;
  padding-bottom: 80px;
}

.hero-content h1 { color: #fff; }
.hero-content p.lede { color: rgba(255,255,255,0.85); }

@media (max-width: 900px) {
  .hero-content { min-height: 460px; padding-top: 60px; padding-bottom: 60px; }
  .hero-overlay { background: rgba(10, 20, 45, 0.55); }
}
</style>
