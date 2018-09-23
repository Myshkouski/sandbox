let base = ''
let path = '/_nuxt/'

const plugins = [
  '~/plugins/filters',
  '~/plugins/i18n',
  {
    src: '~/plugins/debug',
    ssr: false
  }
]

if (process.env.DEPLOY_ENV == 'GH_PAGES') {
  base = 'https://myshkouski.github.io'
  path = '/sandbox/'

  plugins.push({
    src: '~/plugins/metrika',
    ssr: false
  })
}

module.exports = {
  srcDir: 'src/docs',
  build: {
    parallel: true,
    publicPath: base + path,
    extend(config, {
      isClient
    }) {
      const mainFields = ['module', 'main']
      if (isClient) {
        mainFields.unshift('browser')
      }
      config.resolve.mainFields = mainFields

      const extensions = config.resolve.extensions;
      ['.vue', '.pug', '.sass'].forEach(ext => {
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
  loading: false
}
