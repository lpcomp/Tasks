
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import commonStyles from './src/commonStyles'

export default class App extends Component{
	render(){
		return(
			<View style={styles.container} >
				<Text style={styles.txt} >Bem-vindo ao React Native</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	txt: {
		fontFamily: commonStyles.fontFamily,
		fontSize: 20,
	}
});