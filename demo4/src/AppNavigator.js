import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabMapScreen from './TabMapScreen';
import TabGPSScreen from './TabGPSScreen';

const Tab = createBottomTabNavigator();

const op1 = {
  tabBarLabel: 'Map',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_map_press.png')
          : require('./assets/img/ic_map_normal.png')
      }
    />
  ),
};

const op2 = {
  tabBarLabel: 'GPS',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_location_press.png')
          : require('./assets/img/ic_location_normal.png')
      }
    />
  ),
};

const RootStack = ()=>{
  return(
    <Tab.Navigator initialRouteName="Tab1">
      <Tab.Screen name="Tab1" component={TabMapScreen} options={op1}/>
      <Tab.Screen name="Tab2" component={TabGPSScreen} options={op2}/>
    </Tab.Navigator>
  )
}

export default RootStack;
