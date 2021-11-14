const launchesModel = require('../../models/launches.model');

function httpgetAllLaunches(req, res) {
    return res.status(200).json(launchesModel.getAllLaunches);
};

function httpAddNewLaunch() {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate 
        || !launch.destination) {
            return res.status(400).json({
                error: 'Missing required launch property'
            })
        }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Date property is invalid'
        })
    }

    launchesModel.addNewLaunch(launch);
    res.status(201).json(launch);
};

module.exports = {
    httpgetAllLaunches,
    httpAddNewLaunch,
};