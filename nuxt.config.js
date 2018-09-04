let base = ''
let path = '/_nuxt/'

if (process.env.DEPLOY_ENV == 'GH_PAGES') {
  base = 'https://myshkouski.github.io'
  path = '/sandbox/'
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
      ['.yml', '.yaml', '.pug', '.sass'].forEach(ext => {
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
  plugins: [
    '~/plugins/filters',
    '~/plugins/i18n',
    {
      src: '~/plugins/metrika',
      ssr: false
    },
    {
      src: '~/plugins/debug',
      ssr: false
    }
  ],
  router: {
    base
  },
  head: {
    meta: [
      {
        hid: 'yandex-verification',
        name: 'yandex-verification',
        content: '72f2c5fa362f4ae3'
      }
    ]
  }
}
