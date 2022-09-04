const React = require('react-native');
const { DeviceEventEmitter } = React;

const SENSOR_TYPE = "BatteryLevel";
const BATTERY_LEVEL_LOW_THRESHOLD = 25;

const batteryLevelSensor = async(sendData) => {
    DeviceEventEmitter.addListener('BatteryStatus', ({level, isPlugged}) => {
        if (level <= BATTERY_LEVEL_LOW_THRESHOLD) {
            sendData(SENSOR_TYPE);
        }
    });
};

export default batteryLevelSensor;