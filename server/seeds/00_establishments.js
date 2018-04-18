const establishments = require(`../seed-data/establishments`)

exports.seed = function(knex, Promise) {
  return knex(`establishments`).del()
    .then(function() {
      return knex(`establishments`).insert(establishments);
    });
};
