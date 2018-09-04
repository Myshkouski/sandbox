import VueI18n from 'vue-i18n'
import Debug from 'debug'

const debug = Debug('nuxt:page-index')

const messages = {
  'ru': {
    docs: 'Документы'
  }
}

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages
})

export default {
  head() {
    const head = {
      title: 'mainpage'
    }

    debug('head', head)

    return head
  },

  i18n
}
