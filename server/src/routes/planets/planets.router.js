const express = require('express');
const planetsController = require('./planets.controllers');

const planetsRouter = express.Router();

planetsRouter.get('/', planetsController.httpgetAllPlanets);

module.exports = planetsRouter