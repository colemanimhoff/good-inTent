const knex = require('../db/knex')

module.exports = {
    list() {
        return knex('group_list')
    },
    read(id) {
        return knex('group_list').where('id', id).first()
    },
    create(list) {
        return knex('group_list').insert(list, '*')
    },
    update(id, list) {
        return knex('group_list').where('id', id).update(list, '*')
    },
    delete(id) {
        return knex('group_list').where('id', id).del()
    },
}