const path = require('path')
const Koa = require('koa')
const koaRouter = require('koa-router')
const WebSocket = require('ws')
const koaCors = require('koa-cors')
const knex = require('knex')
const pg = require('pg')
const config = require('../config')

const initialState = {
  latestMessage: null
}

const db = knex(config.database)

const dbClient = new pg.Client(config.database.connection)

db('store').first().where({ name: config.storeName }).then(store => {
  if (!store) {
    return db('store').insert({
      name: config.storeName,
      state: initialState
    })
  }
})
.then(() => {
  return new Promise((resolve, reject) => {
    dbClient.connect(err => {
      if (err) {
        reject(err)
      }
      resolve(dbClient)
    })
  })
})
.then(() => {
  return new Promise((resolve, reject) => {
    dbClient.query(`LISTEN "${config.channelName}"`, (err, result) => {
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })
})

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
  dbClient.on('notification', data => {
    console.log('notification', data)
    ws.send(data.payload)
  })

  ws.on('message', msg => {
    console.log('received: %s', msg)
    const data = JSON.parse(msg)
    if (data.event === 'next') {
      ws.send(next())
    }
    if (data.event === 'mutate') {
      const state = { latestMessage: `mutated ${Math.random()}` }
      return db.raw(`
        update store s
        set state = json '${JSON.stringify(state)}'
        where name = '${config.storeName}';
      `).then(() => {
          return new Promise((resolve, reject) => {
            dbClient.query(`NOTIFY "${ config.channelName }", '${JSON.stringify(state)}'`, (err, result) => {
              if (err) {
                reject(err)
              }
              console.log('got there')
              resolve(result)
            })
          })
        })
    }
  })

  ws.send(JSON.stringify({
    latestMessage: 'something'
  }))
})
