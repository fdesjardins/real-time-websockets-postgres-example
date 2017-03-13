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

config.storeName = 'demo_store'

config.channelName = 'demo_channel'

module.exports = config
