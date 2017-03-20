const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const koaWebpack = require('koa-webpack')
const koaStatic = require('koa-static')
const koaRouter = require('koa-router')
const koaCompress = require('koa-compress')
const koaMount = require('koa-mount')
const webpackConfig = require('./webpack.config.js')
const Webpack = require('webpack')

// const compiler = Webpack(webpackConfig)

const app = new Koa()
app.use(koaCompress())

const index = fs.readFileSync('./index.html').toString()

app.use(koaMount('/public', koaStatic(path.join(__dirname, './dist'))))
// app.use(koaWebpack({ compiler }))

app.use(async (ctx, next) => {
  await next()
  ctx.body = index
})

if (!module.parent) {
  app.listen(3000)
  console.log('dev server listening on port 3000')
}
