const debug = require('debug')('nuxt:layout-default')

import AllLayoutMixin from '~/mixins/layouts/all'

export default {
  mixins: [
    AllLayoutMixin
  ],

  components: {
    MenuComponent: require('~/components/menu').default
  },

  data() {
    return {
      hiddenMenu: true
    }
  },

  methods: {
    toggleMenu() {
      this.hiddenMenu = !this.hiddenMenu
    }
  }
}
