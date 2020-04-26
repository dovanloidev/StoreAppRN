import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const color = {
	ACTIVE: '#147EFB',
	INACTIVE: '#CCC'
}

const CategoryStack = createStackNavigator({
	Categories,
	Category,
});
CategoryStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => {
		return <Ionicons name="md-planet" size={36} color={focused ? color.ACTIVE : color.INACTIVE} />;
	},
};
const CartStack = createStackNavigator({ Cart });
CartStack.navigationOptions = {
	tabBarLabel: 'Cart',
	tabBarIcon: ({ focused }) => {
		return <Ionicons name="md-cart" size={36} color={focused ? color.ACTIVE : color.INACTIVE} />;
	},
};
const OrderStack = createStackNavigator({ Orders });
OrderStack.navigationOptions = {
	tabBarLabel: 'Orders',
	tabBarIcon: ({ focused }) => {
		return <Ionicons name="md-wallet" size={36} color={focused ? color.ACTIVE : color.INACTIVE} />;
	},
};
const SettingStack = createStackNavigator({ Settings });
SettingStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => {
		return <Ionicons name="md-settings" size={36} color={focused ? color.ACTIVE : color.INACTIVE} />;
	},
};

const AppNavigator = createBottomTabNavigator({
	CategoryStack,
	CartStack,
	OrderStack,
	SettingStack,
});

export default AppNavigator;
