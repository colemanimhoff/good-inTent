const groupLists = require('../lib/group_lists')

exports.seed = (knex, Promise) => {
  return knex('group_list').del()
    .then(() => {
      return knex('group_list').insert(groupLists)
    })
}
