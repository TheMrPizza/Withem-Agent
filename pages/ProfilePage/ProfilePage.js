import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Switch } from '@react-native-material/core';
import store, { ACTIONS } from '../../store';

const SENSORS = [
	'Battery Status',
	'Movement Tracker',
	'Screen Unlocks',
	'Surround Recording'
];

const ProfilePage = ({navigation}) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [sensorsValues, setSensorsValues] = useState(SENSORS.map(() => false));

	const onToggle = (sensorIndex) => (value) => {
		setSensorsValues((sensors) => {
			const sensorsCopy = [...sensors];
			sensorsCopy[sensorIndex] = value;
			return sensorsCopy;
		});
	};

	const onPress = () => {
		store.dispatch({
			type: ACTIONS.ADD_PERSONAL_INFO,
			payload: {
				firstName,
				lastName,
				sensors: sensorsValues
			}
		});

		navigation.navigate('contacts-page');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Personal Info</Text>
			<View style={styles.personalInfo}>
				<TextInput label="First Name" value={firstName} onChangeText={setFirstName} style={styles.text} />
				<TextInput label="Last Name" value={lastName} onChangeText={setLastName} style={styles.text} />
			</View>

			<Text style={styles.title}>Sensors</Text>
			{
				SENSORS.map((sensor, index) => (
					<View style={styles.sensorItem} key={sensor}>
						<Text>{sensor}</Text>
						<Switch value={sensorsValues[index]} onValueChange={onToggle(index)} />
					</View>
				))
			}

			<View style={{alignItems: 'center'}}>
				<TouchableOpacity style={styles.button} onPress={onPress}>
					<Text style={styles.buttonText}>One More Step</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		alignSelf: 'center'
	},
	title: {
		paddingTop: 20,
		paddingBottom: 10,
		fontSize: 20
	},
	personalInfo: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingTop: 5
	},
	text: {
		width: '48%'
	},
	sensorItem: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		justifyContent: 'flex-end',
		width: '60%',
		borderRadius: 20,
		backgroundColor: '#3651a5',
		alignItems: 'center',
		top: 40
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	}
});

export default ProfilePage;