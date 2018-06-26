const trips = require('../lib/trips')

exports.seed = (knex, Promise) => {
  return knex('trip').del()
    .then(() => {
      return knex('trip').insert(trips)
    })
}
