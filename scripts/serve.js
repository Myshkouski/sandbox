const path = require('path')
const http = require('http')
const debug = require('debug')('server')

const Koa = require('koa')
const serve = require('koa-static')
const compress = require('koa-compress')
const etag = require('koa-etag')
const conditional = require('koa-conditional-get')

const __docs = path.resolve(process.cwd(), 'docs')

const app = new Koa()

app
  .use(conditional())
  .use(etag())
  .use(compress())
  .use(serve(__docs))

const server = http.createServer()

server.on('request', app.callback())

server.listen(8080)
