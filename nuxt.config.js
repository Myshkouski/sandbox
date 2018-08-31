const basePath = '/sandbox/'

module.exports = {
  srcDir: 'src/docs',
  build: {
    parallel: true,
    publicPath: 'https://myshkouski.github.io' + basePath
  },
  generate: {
    dir: 'docs'
  },
  router: {
    base: basePath
  }
}
