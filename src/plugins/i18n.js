import { createI18n } from 'vue-i18n'
import en from '../locales/en.js'
import km from '../locales/km.js'
import zh from '../locales/zh.js'

const savedLocale = localStorage.getItem('locale') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    km,
    zh,
  },
})

