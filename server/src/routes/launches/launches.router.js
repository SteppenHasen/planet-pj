const { httpgetAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require('./launches.controller');
const express = require('express');

const launchesRouter = express.Router();

launchesRouter.get('/', httpgetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete(':id', httpAbortLaunch)

module.exports = launchesRouter;