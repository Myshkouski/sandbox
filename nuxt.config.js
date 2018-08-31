let base
let publicPath

if(process.env.DEPLOY_ENV == 'GH_PAGES') {
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
  }
}
