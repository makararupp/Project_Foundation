<template>
  <footer id="footer">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <h4>{{ t('footer.visit') }}</h4>
          <address style="font-style:normal;color:var(--muted);font-size:15px;margin-bottom:14px">
            <template v-for="line in footerAddress" :key="line">{{ line }}<br></template>
            <a :href="footer.phoneHref">{{ footer.phone }}</a>
          </address>
          <dl class="hours">
            <template v-for="h in footerHours" :key="h.name">
              <dt>{{ h.name }}</dt>
              <dd>
                <template v-for="(l, i) in h.lines" :key="i">
                  {{ l }}<br v-if="i < h.lines.length - 1">
                </template>
              </dd>
            </template>
          </dl>
        </div>
        <div v-for="col in footerColumns" :key="col.title">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="l in col.links" :key="l">
              <a
                v-if="footer.linkUrls[l]"
                :href="footer.linkUrls[l]"
                target="_blank"
                rel="noopener noreferrer"
              >{{ l }}</a>
              <a v-else href="#">{{ l }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="note">{{ t('footer.note') }}</p>
      <div class="legal">
        <span>© {{ year }} {{ siteName }}.</span>
        <nav aria-label="Legal">
          <ul>
            <li><a href="#">{{ t('footer.terms') }}</a></li>
            <li><a href="#">{{ t('footer.privacy') }}</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { footer, siteName } from '../data/content.js'

const { t, tm } = useI18n()
const year = new Date().getFullYear()

const footerAddress = computed(() => {
  const addr = tm('footer.address')
  return Array.isArray(addr) ? addr : footer.address
})

const footerHours = computed(() => {
  const hours = tm('footer.hours')
  return Array.isArray(hours) ? hours : footer.hours
})

const footerColumns = computed(() => {
  const cols = tm('footer.columns')
  return Array.isArray(cols) ? cols : footer.columns
})
</script>