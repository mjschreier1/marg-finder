
exports.seed = function(knex, Promise) {
  return knex(`ratings`).del()
    .then(function () {
      return knex(`ratings`).insert([
        {id: 1, establishment_id: 1, rating: 5},
      ]);
    });
};
