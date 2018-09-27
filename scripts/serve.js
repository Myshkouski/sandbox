const path = require('path')
const http = require('http')
const stream = require('stream')

const Koa = require('koa')
const KoaRouter = require('koa-router')
const serve = require('koa-static')
const compress = require('koa-compress')
const etag = require('koa-etag')
const conditional = require('koa-conditional-get')

const Realtime = require('@alexeimyshkouski/realtime')

const debug = require('debug')('sandbox')

const __static = path.resolve(process.cwd(), 'docs')

const koaRouter = new KoaRouter()
koaRouter
  .use((ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    return next()
  })
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
rt.hub.create('connected')
rt.hub.create('tick')

setInterval(() => {
  rt.hub.publish('tick', Date.now())
}, 1000).unref()

rt.on('hello', ctx => {
  const payload = ctx.socket.address()

  ctx.send(['!/hello', payload])

  ctx.app.hub.broadcast(ctx.rooms.get(ctx.room), payload)
})

const server = http.createServer()

server.on('request', koa.callback())
server.on('upgrade', rt.callback())

server.listen(8080)
