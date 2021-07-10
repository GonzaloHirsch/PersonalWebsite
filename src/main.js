import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import './index.css'
import messages from './lang'

import getBrowserLocale from '@/lang/getBrowserLocale'
import { supportedLocalesInclude } from '@/lang/supportedLocales'

Vue.config.productionTip = false

// i18n get starting locale
function getStartingLocale () {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale
  } else {
    return process.env.VUE_APP_I18N_LOCALE || 'en'
  }
}

// Add i18n
Vue.use(VueI18n)

// Configure i18n
export const i18n = new VueI18n({
  locale: getStartingLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
