import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import { formatPrice } from '../utils/Number';

export default class ProductListItem extends React.Component {
  render() { 
    const { product, onAddToCartClick } = this.props;
    var price = `${product.price}K`
    return (
		<View style={styles.shadow}>
			<View style={styles.container}>
				<Image style={styles.img} source={{uri: product.imageUrl}} />
				<View style={styles.info}>
					<Text style={styles.name}>{product.name}</Text>
					<View style={styles.priceRow}>
						<Text style={styles.price}>{price}</Text>
						<TouchableOpacity onPress={onAddToCartClick}>
							<Text style={styles.cartText}>Mua +</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
  }
}

const styles = StyleSheet.create({
  cartText: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#2f95dc'
  },
  shadow: {
    shadowColor: '#000',
    elevation: 10,
  },
  container: {
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  info: {
    padding: 8
  },
  img: {
    height: 150,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  name: {
    fontSize: 16,
    marginBottom: 8
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    fontSize: 16,
    color: '#888',
    flex: 1
  }
});
