const path = require('path')
const Koa = require('koa')
const koaWebpack = require('koa-webpack')
const koaStatic = require('koa-static')
const webpackConfig = require('./webpack.config.js')
const Webpack = require('webpack')
const WebSocket = require('ws')

const compiler = Webpack(webpackConfig)

const app = new Koa()
app.use(koaStatic(path.join(__dirname, './dist')))
app.use(koaWebpack({ compiler }))

app.use(ctx => {
  ctx.body = 'Hello World'
})

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
})

app.listen(3001)
