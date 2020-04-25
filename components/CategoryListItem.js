import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Skii from '../assets/skii.png';

export default class CategoryListItem extends Component {
	render() {
		const { category, onPress } = this.props;
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={onPress}>
				<View style={styles.container}>
					<Text style={styles.title}> {category.name} </Text>
					<Image style={styles.icon} source={Skii} />
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 16,
		borderRadius: 5,
		backgroundColor: 'white',
		shadowColor: 'black',
		elevation: 20,
		marginBottom: 16,
	},
	title: {
		textTransform: 'uppercase',
		marginBottom: 8,
		fontWeight: '700',
	},
	icon: {
		width: 64,
		height: 64,
	},
});
