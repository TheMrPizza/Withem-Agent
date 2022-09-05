import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../../consts';

const IdlePage = () => (
	<View style={styles.container}>
		<Text style={{fontSize: 60, fontWeight: 'bold', color: PRIMARY_COLOR}}>All Ready!</Text>
		<Text style={{fontSize: 28, width: '80%', textAlign: 'center'}}>Now you can close the app and stay...</Text>
		<Image source={require("../../assets/logo.png")} style={styles.logo}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: '80%',
		height: undefined,
		aspectRatio: 1,
		resizeMode:'contain'
	}
});

export default IdlePage;