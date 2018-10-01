const debug = require('debug')('nuxt:layout-default')

export default {
  components: {
    MenuComponent: require('~/components/menu').default
  },

  data() {
    return {
      hiddenMenu: true
    }
  },

  head() {
    return {
      meta: [{
          hid: 'charset',
          charset: 'utf-8'
        },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width,initial-scale=1'
        }
      ],
      link: [{
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon.png'
      }]
    }
  },

  methods: {
    toggleMenu() {
      this.hiddenMenu = !this.hiddenMenu
    }
  }
}
