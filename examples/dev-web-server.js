const path = require('path')
const Koa = require('koa')
const koaWebpack = require('koa-webpack')
const koaStatic = require('koa-static')
const koaRouter = require('koa-router')
const webpackConfig = require('./webpack.config.js')
const Webpack = require('webpack')
const WebSocket = require('ws')

const compiler = Webpack(webpackConfig)

const app = new Koa()
app.use(koaStatic(path.join(__dirname, './')))
app.use(koaWebpack({ compiler }))

const router = koaRouter()

// router.get('/', async (ctx, next) => {
//   ctx.render = (template, locals, state = {}) => {
//     ctx.type = 'text/html'
//     console.log(template)
//   }
//   await next()
// })

if (!module.parent) {
  app.listen(3000)
  console.log('dev server listening on port 3000')
}
