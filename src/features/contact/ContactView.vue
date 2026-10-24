<template>
  <div class="contact-page">
    <div class="wrap">
      <header class="contact-head">
        <h1>{{ t('contact.title') }}</h1>
        <p>{{ t('contact.intro') }}</p>
      </header>

      <!-- Contact details: email (once set in content.js), phone, address, hours -->
      <div class="contact-grid">
        <section v-if="contact.email" class="contact-item">
          <h2>{{ t('contact.emailHeading') }}</h2>
          <a class="contact-value" :href="contactHref()">{{ contact.email }}</a>
          <p>{{ t('contact.emailNote') }}</p>
        </section>

        <section class="contact-item">
          <h2>{{ t('contact.phoneHeading') }}</h2>
          <a class="contact-value" :href="footer.phoneHref">{{ footer.phone }}</a>
          <p>{{ t('contact.phoneNote') }}</p>
        </section>

        <section class="contact-item">
          <h2>{{ t('contact.addressHeading') }}</h2>
          <address>
            <template v-for="line in address" :key="line">{{ line }}<br></template>
          </address>
          <a class="contact-link" :href="location.directionsUrl" target="_blank" rel="noopener noreferrer">
            {{ t('contact.directions') }} <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section class="contact-item">
          <h2>{{ t('contact.hoursHeading') }}</h2>
          <dl class="hours">
            <template v-for="h in hours" :key="h.name">
              <dt>{{ h.name }}</dt>
              <dd>
                <template v-for="(line, i) in h.lines" :key="i">{{ line }}<br></template>
              </dd>
            </template>
          </dl>
        </section>
      </div>

      <div class="contact-map">
        <iframe
          :src="location.mapEmbedUrl"
          :title="t('contact.mapTitle')"
          allowfullscreen
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <!-- Shortcuts to other pages -->
      <section class="contact-more">
        <h2>{{ t('contact.moreHeading') }}</h2>
        <ul>
          <li v-for="item in more" :key="item.to">
            <router-link :to="item.to">{{ item.label }} →</router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer, location, contact, contactHref } from '../../data/content.js'

const { t, tm } = useI18n()

const asList = (key, fallback = []) => {
  const value = tm(key)
  return Array.isArray(value) ? value : fallback
}

// Address and hours come from the footer text, so they stay in sync
const address = computed(() => asList('footer.address', footer.address))
const hours = computed(() => asList('footer.hours', footer.hours))
const more = computed(() => asList('contact.more'))
</script>

<style scoped>
/* Fonts follow the site settings: --serif for headings, --text for paragraphs */
.contact-page {
  background: var(--surface);
  padding: 72px 0 96px;
}

.contact-head {
  border-bottom: 6px solid var(--ink);
  padding-bottom: 32px;
  margin-bottom: 40px;
}

.contact-head h1 {
  font-family: var(--serif);
  font-size: clamp(52px, 7.6vw, 108px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.01em;
  margin: 0 0 20px;
}

.contact-head p {
  font-family: var(--text);
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.45;
  max-width: 56ch;
  margin: 0;
}

/* Up to 4 columns with thin lines between */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  margin-bottom: 56px;
}

.contact-item {
  border-top: 1px solid var(--ink);
  padding-top: 16px;
}

.contact-item h2 {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 10px;
}

.contact-value {
  display: inline-block;
  font-family: var(--serif);
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
  word-break: break-word;
  margin-bottom: 8px;
}

.contact-value:hover,
.contact-link:hover,
.contact-more a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.contact-item p,
.contact-item address,
.hours {
  font-family: var(--text);
  font-style: normal;
  font-size: 17px;
  line-height: 1.55;
  color: var(--muted);
  margin: 0 0 12px;
}

.contact-link {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 700;
  text-decoration: none;
}

.hours dt {
  font-weight: 600;
  color: var(--ink);
}

.hours dd {
  margin: 0 0 10px;
}

.contact-map {
  aspect-ratio: 16 / 7;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--sky);
  margin-bottom: 72px;
}

.contact-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* Shortcuts */
.contact-more {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 48px;
  border-top: 6px solid var(--ink);
  padding-top: 24px;
}

.contact-more h2 {
  font-family: var(--serif);
  font-size: 32px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}

.contact-more ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 36px;
}

.contact-more a {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 860px) {
  .contact-map {
    aspect-ratio: 4 / 3;
    margin-bottom: 48px;
  }
  .contact-more {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .contact-more ul {
    grid-template-columns: 1fr;
  }
}
</style>
