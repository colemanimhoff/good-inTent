const items = require('../lib/items')

exports.seed = (knex, Promise) => {
  return knex('item').del()
    .then(() => {
      return knex('item').insert(items)
    })
}
