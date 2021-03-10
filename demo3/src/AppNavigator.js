import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabQRcode from './TabQRcode';
import ScannerScreen from './ScannerScreen';
import TabScanner from './TabScanner';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator initialRouteName="tab1">
      <Tab.Screen name="tab1" component={TabQRcode} />
      <Tab.Screen name="tab2" component={TabScanner} />
    </Tab.Navigator>
  );
};

export default TabScreens;
