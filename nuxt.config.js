let base = process.env.ROUTER_BASE || ''
let path = process.env.PUBLIC_PATH || '/_nuxt/'

const plugins = [
  '~/plugins/filters',
  '~/plugins/i18n',
  {
    src: '~/plugins/debug',
    ssr: false
  }
]

if (process.env.NODE_ENV === 'production') {
  plugins.push({
    src: '~/plugins/metrika',
    ssr: false
  })
}

export default {
  srcDir: 'src/docs',
  build: {
    parallel: true,
    publicPath: path,
    extend(config, {
      isClient
    }) {
      const mainFields = ['module', 'main']
      if (isClient) {
        mainFields.unshift('browser')
      }
      config.resolve.mainFields = mainFields

      const additionalExtensions = ['.pug', '.sass']
      const extensions = config.resolve.extensions
      additionalExtensions.forEach(ext => {
        if (!~extensions.indexOf(ext)) {
          extensions.push(ext)
        }
      })
    }
  },
  generate: {
    dir: 'docs',
    fallback: true
  },
  render: {
    http2: {
      push: true
    }
  },
  plugins,
  serverMiddleware: [
    __dirname + '/api/cors'
  ],
  router: {
    base
  },
  head: {
    meta: [{
      hid: 'yandex-verification',
      name: 'yandex-verification',
      content: '72f2c5fa362f4ae3'
    }]
  },
  loading: false,
  loadingIndicator: false
}
