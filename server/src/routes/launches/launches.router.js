const { httpgetAllLaunches, httpAddNewLaunch } = require('./launches.controller');
const express = require('express');

const launchesRouter = express.Router();

launchesRouter.get('/', httpgetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;