const knex = require('../db/knex')

module.exports = {
    list() {
        return knex('item')
    },
    read(id) {
        return knex('item').where('id', id).first()
    },
    create(item) {
        return knex('item').insert(item, '*')
    },
    update(id, item) {
        return knex('item').where('id', id).update(item, '*')
    },
    delete(id) {
        return knex('item').where('id', id).del()
    },
}