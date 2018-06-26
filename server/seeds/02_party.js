const parties = require('../lib/parties')

exports.seed = (knex, Promise) => {
  return knex('party').del()
    .then(() => {
      return knex('party').insert(parties)
    })
}
