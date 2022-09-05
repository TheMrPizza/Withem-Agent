import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR } from '../../consts';
import { Button } from '@react-native-material/core';

const HomePage = ({navigation}) => {
	const onPress = () => {
		navigation.navigate('profile-page');
	};

	return (
		<View style={styles.container}>
			<View style={{flex: 1, marginTop: '50%'}}>
				<Image source={require("../../assets/logo.png")} style={styles.logo}/>
			</View>

			<Button
				title="Start Here"
				style={styles.button}
				onPress={onPress}
				uppercase={false}
				color={PRIMARY_COLOR}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20
	},
	logo: {
		width: '80%',
		height: undefined,
		aspectRatio: 1,
		resizeMode:'contain'
	},
	button: {
		width: '60%'
	},
	buttonText: {
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold'
	}
});

export default HomePage;