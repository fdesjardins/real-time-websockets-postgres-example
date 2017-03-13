const path = require('path')
const config = require('../config')

config.database.migrations = {
  tableName: 'migrations',
  directory: path.join(__dirname, 'migrations')
}

module.exports = {
  development: config.database
}
