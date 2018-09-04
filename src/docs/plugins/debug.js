if (process.browser) {
  const {
    localStorage
  } = window
  const prop = 'debug'

  if (require('./isProd')) {
    localStorage.removeItem('debug')
  } else {
    localStorage.setItem('debug', 'nuxt:*')
  }
}
