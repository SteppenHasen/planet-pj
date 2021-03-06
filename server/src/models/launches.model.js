const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function existLaunchWithID(launchID) {
    return launches.has(launchID)
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customer: ['Zero to Mastery', 'NASA'],
            upcoming: true,
            success: true,
        })
    );
};

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId)
    aborted.upcoming = false
    aborted.success = false
    launches.delete(launchId)
    return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existLaunchWithID,
    abortLaunchById
}