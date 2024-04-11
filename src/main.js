// scss
import './assets/background.scss'
import './assets/text.scss'
import './assets/home.scss'
import './assets/knowledges.scss'
import './assets/contact.scss'

// interactive bubble
import './js/bubble.js'

import i18n from './lang/i18n'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(i18n).mount('#app')