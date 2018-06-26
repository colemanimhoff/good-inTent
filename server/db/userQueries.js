const knex = require('../db/knex')

module.exports = {
    list() {
        return knex('users')
    },
    read(id) {
        return knex('users').where('id', id).first()
    },
    create(user) {
        return knex('users').insert(user, '*')
    },
    update(id, user) {
        return knex('users').where('id', id).update(user, '*')
    },
    delete(id) {
        return knex('users').where('id', id).del()
    },
}