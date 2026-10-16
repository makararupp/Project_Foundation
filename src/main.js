import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import { i18n } from './plugins/i18n.js'
import { router } from './router/index.js'

createApp(App).use(router).use(i18n).mount('#app')
