import { createI18n } from 'vue-i18n';
import { messages } from './lenguages'
 
const i18n = new createI18n({
    legacy: false,
    locale: navigator.language.startsWith('es') ? 'es' : 'en',
    fallbackLocale: 'en',
    messages
  })

  export default i18n