const knex = require('../db/knex')

module.exports = {
    list() {
        return knex('individual_list')
    },
    read(id) {
        return knex('individual_list').where('id', id).first()
    },
    create(list) {
        return knex('individual_list').insert(list, '*')
    },
    update(id, list) {
        return knex('individual_list').where('id', id).update(list, '*')
    },
    delete(id) {
        return knex('individual_list').where('id', id).del()
    },
}