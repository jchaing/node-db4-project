const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to get recipes', err });
    });
});

router.get('/:id/shopping', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Failed to get shopping list for recipe', err });
    });
});

module.exports = router;
