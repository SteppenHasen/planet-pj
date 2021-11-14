const planetsModel = require('../../models/planets.model');

function httpgetAllPlanets(req, res) {
    return res.status(200).json(planetsModel.getAllPlanets());
}

module.exports = {
    httpgetAllPlanets
}