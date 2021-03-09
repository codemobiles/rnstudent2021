import React, {Component} from 'react';
import {Image, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import JSONFeedScreen from './JSONFeedScreen';
import CameraScreen from './CameraScreen';
import YoutubeScreen from './YoutubeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
    </Stack.Navigator>
  );
};

const SuccessTabs = () => {
  return (
    <Tab.Navigator initialRouteName="JSON">
      <Tab.Screen name="JSON" component={JSONFeedScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
    </Tab.Navigator>
  );
};

export default RootStack;