let base
let publicPath

if (process.env.DEPLOY_ENV == 'GH_PAGES') {
  base = '/sandbox/'
  publicPath = 'https://myshkouski.github.io' + base
}

module.exports = {
  srcDir: 'src/docs',
  build: {
    parallel: true,
    publicPath
  },
  generate: {
    dir: 'docs'
  },
  router: {
    base
  },
  head: {
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'yandex-verification',
        content: '72f2c5fa362f4ae3'
      }
    ]
  }
}
