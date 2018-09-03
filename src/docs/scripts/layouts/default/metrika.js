/*global Ya*/

const debug = require('debug')('yandex.metrika')

metrika(document, window, 'yandex_metrika_callbacks2')

debug('imported')

function metrika(d, w, c) {
  (w[c] = w[c] || []).push(function() {
    try {
      w.yaCounter50170357 = new Ya.Metrika2({
        id: 50170357,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      })
    } catch (e) {
      /*no-empty: false*/
    }
  })

  var n = d.getElementsByTagName('script')[0],
    s = d.createElement('script'),
    f = function() {
      n.parentNode.insertBefore(s, n)
    }
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://mc.yandex.ru/metrika/tag.js'

  if (w.opera == '[object Opera]') {
    d.addEventListener('DOMContentLoaded', f, false)
  } else {
    f()
  }
}
