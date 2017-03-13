const path = require('path')
const Koa = require('koa')
const koaRouter = require('koa-router')
const WebSocket = require('ws')
const koaCors = require('koa-cors')

const app = new Koa()
app.use(koaCors())

const router = koaRouter()

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "http://localhost:3000",
    "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS"
  }
})

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
  })

  ws.send('something')
})
