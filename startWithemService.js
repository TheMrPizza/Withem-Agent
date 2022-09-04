import bootstrap from './service/bootstrap';
import sendData from './service/serverCommunicator';
import batteryLevelSensor from './service/sensors/batteryLevelSensor';

const startWithemService = async() => {
    console.log('Starting Withem service...');
    for (const sensor of bootstrap.sensors) {
        sensor(sendData);
    }

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(30000);
};

module.exports = startWithemService;
