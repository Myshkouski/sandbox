const debug = require('debug')('page:error')

export default {
  props: {
    error: {
      default () {
        debug('use default error prop')

        return {
          statusCode: 404,
          message: 'This page could not be found'
        }
      }
    }
  },

  created() {
    debug('%d %s', this.error.statusCode, this.error.message)
  }
}
