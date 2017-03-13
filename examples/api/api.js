const path = require('path')
const Koa = require('koa')
const koaRouter = require('koa-router')
const WebSocket = require('ws')
const koaCors = require('koa-cors')
const knex = require('knex')

const config = require('../config')

const db = knex(config.database)
const app = new Koa()
// app.use(koaCors())

const router = koaRouter()

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 3002
})

const next = (() => {
  const msgs = [
    'one',
    'two',
    'three',
    'four',
    'five'
  ]
  return () => JSON.stringify({ latestMessage: msgs.pop() || 'all gone' })
})()

wss.on('connection', ws => {
  ws.on('message', msg => {
    console.log('received: %s', msg)
    const data = JSON.parse(msg)
    if (data.event === 'next') {
      ws.send(next())
    }
  })

  ws.send(JSON.stringify({
    latestMessage: 'something'
  }))
})
