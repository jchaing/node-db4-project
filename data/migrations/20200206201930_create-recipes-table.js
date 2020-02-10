exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('quantity', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.float('quantity').notNullable();
      // tbl.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('quantity')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
