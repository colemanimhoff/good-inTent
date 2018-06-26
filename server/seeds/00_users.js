const users = require('../lib/users')

exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert(users)
    })
}
