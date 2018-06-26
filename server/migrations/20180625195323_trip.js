exports.up = (knex, Promise) => {
    return knex.schema.createTable('trip', (table) => {
        table.increments().primary()
        table.text('name')
        table.date('start_date')
        table.date('end_date')
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index()
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('trip')
}