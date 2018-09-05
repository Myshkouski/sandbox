let base
let publicPath

if (process.env.DEPLOY_ENV == 'GH_PAGES') {
  base = '/sandbox/'
  publicPath = 'http://alexeimyshkouski-31-08-2018-1.tk' + base
}

module.exports = {
  srcDir: 'src/docs',
  build: {
    parallel: true,
    publicPath
  },
  generate: {
    dir: 'docs',
    fallback: true
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
