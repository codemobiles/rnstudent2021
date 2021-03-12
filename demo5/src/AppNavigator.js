import React, {Component} from 'react';
import {Image, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import Tab3Screen from './Tab3Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

RootStack = () => {
  return (
    <Tab.Navigator initialRouteName="tab1">
      <Tab.Screen name="tab1" component={Tab1Screen} />
      <Tab.Screen name="tab2" component={Tab2Screen} />
      <Tab.Screen name="tab3" component={Tab3Screen} />
    </Tab.Navigator>
  );
};

export default RootStack;
