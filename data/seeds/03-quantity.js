
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 2.25},
        {recipe_id: 1, ingredient_id: 2, quantity: 1.25},
        {recipe_id: 1, ingredient_id: 3, quantity: 1},
        {recipe_id: 1, ingredient_id: 4, quantity: 1},
        {recipe_id: 1, ingredient_id: 5, quantity: 1},
        {recipe_id: 1, ingredient_id: 6, quantity: 1},
        {recipe_id: 1, ingredient_id: 7, quantity: 2},
        {recipe_id: 1, ingredient_id: 8, quantity: 1.25},
        {recipe_id: 1, ingredient_id: 9, quantity: 2},
        {recipe_id: 2, ingredient_id: 1, quantity: 1},
        {recipe_id: 2, ingredient_id: 2, quantity: 1},
        {recipe_id: 2, ingredient_id: 3, quantity: 1},
        {recipe_id: 2, ingredient_id: 6, quantity: 1},
        {recipe_id: 2, ingredient_id: 10, quantity: 1.25},
        {recipe_id: 2, ingredient_id: 4, quantity: 2},
      ]);
    // });
};
