const config = {}

config.environments = Object.freeze({
  local: 'local'
})

config.env = config.environments[process.env['RT_ENV']] ||
  config.environments.local

config.database = {
  client: 'pg',
  connection: {
    user: 'postgres',
    database: 'realtime'
  }
}

module.exports = config
