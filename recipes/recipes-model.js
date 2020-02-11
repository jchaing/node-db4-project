const db = require('../data/db-config.js');

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipes as r')
    .join('quantity as q', 'r.id', 'q.recipe_id')
    .join('ingredients as i', 'i.id', 'q.ingredient_id')
    .select('i.name', 'q.quantity')
    .where({recipe_id : recipe_id})
}

module.exports = {
  getRecipes,
  getShoppingList
};
