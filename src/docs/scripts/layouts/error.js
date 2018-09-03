export default {
  props: {
    error: {
      default () {
        return {
          statusCode: 404,
          message: 'This page could not be found'
        }
      }
    }
  }
}
