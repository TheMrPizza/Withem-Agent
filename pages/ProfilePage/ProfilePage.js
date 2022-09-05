import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Switch, Button } from '@react-native-material/core';
import store, { ACTIONS } from '../../store';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../consts';

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

	const isValid = useMemo(() => (
		firstName.length > 0 && lastName.length > 0 && sensorsValues.some(value => value)
	), [firstName, lastName, sensorsValues]);

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
			<View>
				<Text style={styles.title}>Personal Info</Text>
				<View style={styles.personalInfo}>
					<TextInput
						label="First Name"
						value={firstName}
						onChangeText={setFirstName}
						style={styles.text}
						color={PRIMARY_COLOR}
					/>

					<TextInput
						label="Last Name"
						value={lastName}
						onChangeText={setLastName}
						style={styles.text}
						color={PRIMARY_COLOR}
					/>
				</View>

				<Text style={styles.title}>Sensors</Text>
				{
					SENSORS.map((sensor, index) => (
						<View style={styles.sensorItem} key={sensor}>
							<Text style={{fontSize: 16}}>{sensor}</Text>
							<Switch
								value={sensorsValues[index]}
								onValueChange={onToggle(index)}
								trackColor={{true: SECONDARY_COLOR, false: '#d7d7d7'}}
								thumbColor={sensorsValues[index] ? PRIMARY_COLOR : undefined}
							/>
						</View>
					))
				}
			</View>

			<View style={{alignItems: 'center', width: '100%'}}>
				<Button
					title="One More Step"
					style={styles.button}
					onPress={onPress}
					uppercase={false}
					color={PRIMARY_COLOR}
					disabled={!isValid}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	title: {
		paddingTop: 20,
		paddingBottom: 10,
		fontSize: 22,
		fontWeight: 'bold'
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
		justifyContent: 'space-between',
		paddingBottom: 16,
		alignItems: 'center'
	},
	button: {
		width: '60%'
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	}
});

export default ProfilePage;