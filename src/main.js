// scss

// interactive bubble
import './js/bubble.js'
import './assets/styles/background.scss'

import i18n from './lang/i18n'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(i18n).mount('#app')