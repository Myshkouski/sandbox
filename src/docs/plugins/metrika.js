/*global Ya*/

if (process.client) {
  const debug = require('debug')('nuxt:plugin:metrika')

  function metrika(document, window, callbackProp) {
    (window[callbackProp] = window[callbackProp] || []).push(function() {
      try {
        window.yaCounter50233789 = new Ya.Metrika2({
          id: 50233789,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        })
      } catch (e) {
        /*no-empty: false*/
      }
    })

    var n = document.getElementsByTagName('script')[0],
      s = document.createElement('script'),
      f = function() {
        n.parentNode.insertBefore(s, n)
      }
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://mc.yandex.ru/metrika/tag.js'

    if (window.opera == '[object Opera]') {
      document.addEventListener('DOMContentLoaded', f, false)
    } else {
      f()
    }

    debug('attached')
  }

  metrika(document, window, 'yandex_metrika_callbacks2')
}
