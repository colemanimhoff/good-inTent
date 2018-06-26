exports.up = (knex, Promise) => {
    return knex.schema.createTable('item', (table) => {
        table.increments().primary()
        table.text('name')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('item')
}