import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem'

export default class Category extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('categoryName', 'Category'),
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					id: 1,
					imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/LEGO-01.jpg',
					name: 'teo',
					price: '5000',
				},
				{
					id: 2,
					imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/LEGO-01.jpg',
					name: 'loi',
					price: '6000',
				},
			],
		};
	}

	render() {
		return (
			<FlatList
				data={this.state.products}
				numColumns={2}
				renderItem={({ item }) => (
					<View style={styles.wrapper}>
						<ProductListItem product={item} />
					</View>
				)}
				keyExtractor={(item) => `${item.id}`}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 8,
		paddingTop: 16
	},
	wrapper: {
		flex: 1,
		paddingHorizontal: 8
	}
});
