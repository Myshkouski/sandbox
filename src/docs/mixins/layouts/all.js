export default {
  head() {
    const head = {
      meta: [
        {
          hid: 'charset',
          charset: 'utf-8'
        },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width,initial-scale=1'
        }
      ]
    }

    console.log('!!!')

    return head
  }
}
