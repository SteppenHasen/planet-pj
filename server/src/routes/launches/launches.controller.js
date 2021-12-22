const launchesModel = require('../../models/launches.model');

function httpgetAllLaunches(req, res) {
    return res.status(200).json(launchesModel.getAllLaunches);
};

function httpAddNewLaunch() {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate 
        || !launch.target) {
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

function httpAbortLaunch(req, res) {
    const launchID = Number(req.params.id)

    if (!launchesModel.existLaunchWithID(launchID)) {
        return res.status(404).json({
            error: 'Launch not found'
        })
    }

    const aborted = launchesModel.abortLaunchById(launchID)
    return res.status(200).json(aborted)
}

module.exports = {
    httpgetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
};