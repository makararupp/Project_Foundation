import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import { i18n } from './plugins/i18n.js'

createApp(App).use(i18n).mount('#app')

