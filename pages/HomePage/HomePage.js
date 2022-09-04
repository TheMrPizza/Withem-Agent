import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

const HomePage = () => (
	<View style={styles.container}>
		<View style={styles.container2}>
			<Image source={require("../../assets/logo.png")} style={styles.logo} />
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Start Here</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	container2: {
		flex: 0.6,
		alignItems: 'center'
	},
	logo: {
		width: '80%',
		height: undefined,
		aspectRatio: 1,
		resizeMode:'contain'
	},
	button: {
		width: '50%',
		borderRadius: 20,
		backgroundColor: '#3651a5',
		alignItems: 'center',
		top: 40
	},
	buttonText: {
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold'
	}
});

export default HomePage;