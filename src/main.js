// Interactive bubble
import './components/bubble.js'
import './assets/styles/background.scss'

// Lenguage
import i18n from './lang/i18n'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(i18n).mount('#app')