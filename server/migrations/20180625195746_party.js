exports.up = (knex, Promise) => {
    return knex.schema.createTable('party', (table) => {
        table.increments().primary()
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index()
        table.integer('trip_id')
            .notNullable()
            .references('id')
            .inTable('trip')
            .onDelete('CASCADE')
            .index()
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('party')
}