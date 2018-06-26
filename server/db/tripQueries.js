const knex = require('../db/knex')

module.exports = {
    list() {
        return knex('trip')
    },
    read(id) {
        return knex('trip').where('id', id).first()
    },
    create(trip) {
        return knex('trip').insert(trip, '*')
    },
    update(id, trip) {
        return knex('trip').where('id', id).update(trip, '*')
    },
    delete(id) {
        return knex('trip').where('id', id).del()
    },
}