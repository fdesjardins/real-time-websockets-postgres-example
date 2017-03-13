const merge = require('lodash.merge')
const base = require('./base')

exports.local = merge({}, base, {
  database: {
    connection: {
      host: 'localhost',
      password: 'password'
    }
  }
})
