const individualLists = require('../lib/individual_lists')

exports.seed = (knex, Promise) => {
  return knex('individual_list').del()
    .then(() => {
      return knex('individual_list').insert(individualLists)
    })
}