exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
        table.increments().primary()
        table.text('username')
        table.text('email')
        table.text('avatarUrl')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
}