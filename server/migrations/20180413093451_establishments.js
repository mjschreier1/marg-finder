
exports.up = function(knex, Promise) {
    return knex.schema.createTable(`establishments`, table => {
        table.increments(`id`).primary().notNullable()
        table.string(`name`).notNullable()
        table.string(`address`).notNullable()
        table.string(`long`).notNullable()
        table.string(`lat`).notNullable()
        table.string(`phone`)
        table.string(`website`)
        table.text(`description`)
        table.integer(`distance`)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(`establishments`)
};
