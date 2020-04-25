import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Alert, Button } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
	static navigationOptions = {
		title: 'Home',
	};

	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ id: 1, name: 'loi' },
				{ id: 2, name: 'hoa' },
				{ id: 3, name: 'linh' },
				{ id: 4, name: 'teo' },
				{ id: 5, name: 'teo' },
			],
		};
	}

	render() {
		const { navigation } = this.props;
		const { categories } = this.state;
		return (
			<FlatList
				data={categories}
				renderItem={({ item }) => (
					<CategoryListItem category={item} onPress={() => navigation.navigate('Category', { categoryName: item.name })} />
				)}
				keyExtractor={(item) => `${item.id}`}
				contentContainerStyle={styles.scroll}
			/>
		);
	}
}

const styles = StyleSheet.create({
	scroll: {
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
	},
});
