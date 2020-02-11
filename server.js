const express = require('express');
const helmet = require('helmet');

const RecipesRouter = require('./recipes/recipes-router')
// const db = require('./data/db-config');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
  res.send('<h1>Welce to Recipes DB!</h1>');
});

module.exports = server;
