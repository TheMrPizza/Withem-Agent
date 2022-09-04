import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

const MOVEMENT_THRESHOLD = 50;
const SENSOR_TYPE = 'Accelerometer';

const phoneMovementSensor = async(sendData) => {
    let setup = {};
    let hasSetup = false;
    setUpdateIntervalForType(SensorTypes.accelerometer, 250);

    const subscription = accelerometer
        .subscribe(
          ({ x, y, z }) => {
            if (!hasSetup) {
                hasSetup = true;
                setup = { x: Math.abs(x), y: Math.abs(y), z: Math.abs(z) };
                return;
            }

            const movement = Math.pow(setup.x - Math.abs(x), 2) + Math.pow(setup.y - Math.abs(y), 2) + Math.pow(setup.z - Math.abs(z), 2);

            if (movement >= MOVEMENT_THRESHOLD) {
              sendData(SENSOR_TYPE);
            }
          },
          error => console.log("The sensor is not available", error)
        );

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(30000);
    subscription.unsubscribe();
};

export default phoneMovementSensor;