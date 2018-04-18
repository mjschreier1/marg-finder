
exports.up = function(knex, Promise) {
    return knex.schema.createTable(`ratings`, table => {
        table.increments(`id`).primary().notNullable()
        table.integer(`establishment_id`).references(`establishments.id`)
        table.integer(`rating`).notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(`ratings`)
};
