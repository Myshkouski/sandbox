const fs = require('fs')
const path = require('path')
const http = require('http')

const Koa = require('koa')
const KoaRouter = require('koa-router')
const compress = require('koa-compress')

const mime = require('mime')

const __static = path.resolve(process.cwd(), 'dist')

function serve(ctx, pathname) {
  pathname = path.join(__static, pathname)
  ctx.type = mime.getType(pathname)
  ctx.body = fs.createReadStream(pathname)
}

const app = new Koa()

const httpRouter = new KoaRouter()
httpRouter
  .get('/favicon(.ico)?', ctx => {
    serve(ctx, 'favicon.ico')
  })
  .get('/_nuxt/*', ctx => {
    serve(ctx, ctx.url)
  })
  .get('/*', ctx => {
    serve(ctx, ctx.url + '/index.html')
  })

app
  .use(httpRouter.routes())
  .use(httpRouter.allowedMethods())

const Realtime = require('@alexeimyshkouski/realtime')

const rt = new Realtime()

rt.hub.create('tick')
rt.hub.create('hello')

rt.on('hello', ctx => {
  ctx.send({
    scope: '/event/hello'
  })
})

setInterval(() => {
  rt.hub.publish(['tick'], Date.now())
}, 1000).unref()

const server = http.createServer()

server.on('request', app.callback())
server.on('upgrade', rt.callback())

server.listen(8080)
