import bootstrap from './service/bootstrap';
import sendData from './service/serverCommunicator';

const startWithemService = async() => {
    console.log('Starting Withem service...');

    for (const sensor in bootstrap.sensors) {
        sensor(sendData);
    }
};

module.exports = startWithemService;
