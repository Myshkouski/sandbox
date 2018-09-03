const dev = process.env.NODE_ENV !== 'production'

if(process.browser && dev) {
  window.localStorage.debug = '*'
}
