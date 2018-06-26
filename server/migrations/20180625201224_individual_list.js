exports.up = (knex, Promise) => {
    return knex.schema.createTable('individual_list', (table) => {
        table.increments().primary()
        table.integer('trip_id')
            .notNullable()
            .references('id')
            .inTable('trip')
            .onDelete('CASCADE')
            .index()
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('item')
            .onDelete('CASCADE')
            .index()
        table.boolean('accounted_for')
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index()
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('individual_list')
}