
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'cup of flour'},
        {name: 'teaspoon of salt'},
        {name: 'teaspoon of baking soda'},
        {name: 'cup of butter'},
        {name: 'cup of sugar'},
        {name: 'egg'},
        {name: 'tablespoon of milk'},
        {name: 'teaspoon of vanilla extract'},
        {name: 'cup of chocolate chips'},
        {name: 'cups of buttermilk'}
      ]);
    // });
};
