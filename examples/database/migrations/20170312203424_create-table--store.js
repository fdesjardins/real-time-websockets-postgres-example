exports.up = (knex, Promise) => {
  return knex.schema.withSchema('public')
    .createTableIfNotExists('store', t => {
      t.comment('App Backing Store')
      t.increments('store_id').primary()
      t.jsonb('state')
      t.index('state', 'store_state_index', 'gin')
    })
}

exports.down = (knex, Promise) => {
  return knex.schema.withSchema('public')
    .dropTableIfExists('navaids')
}
