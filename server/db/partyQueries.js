const knex = require('../db/knex')

module.exports = {
    list() {
        return knex('party')
    },
    read(id) {
        return knex('party').where('id', id).first()
    },
    create(party) {
        return knex('party').insert(party, '*')
    },
    update(id, party) {
        return knex('party').where('id', id).update(party, '*')
    },
    delete(id) {
        return knex('party').where('id', id).del()
    },
}