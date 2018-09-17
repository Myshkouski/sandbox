const path = require('path')
const http = require('http')
const debug = require('debug')('server')

const Koa = require('koa')
const KoaRouter = require('koa-router')
const serve = require('koa-static')
const compress = require('koa-compress')
const etag = require('koa-etag')
const conditional = require('koa-conditional-get')

const Realtime = require('@alexeimyshkouski/realtime')

const mime = require('mime')

const __static = path.resolve(process.cwd(), 'docs')

const koaRouter = new KoaRouter()
koaRouter
  .use(conditional())
  .use(etag())
  .use(compress())
  .use(serve(__static))

const koa = new Koa()
koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())

const rt = new Realtime()

rt.hub.create('hello')
rt.on('hello', ctx => {
  const {
    address
  } = ctx.socket.address()

  ctx.send(['!/hello', address])
  ctx.publish(['!/connected', address])
})

const server = http.createServer()

server.on('request', koa.callback())
server.on('upgrade', rt.callback())

server.listen(8080)
