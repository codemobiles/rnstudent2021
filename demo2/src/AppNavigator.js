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

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName={props.forceLogin ? 'Home' : 'Success'}>
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
      <Stack.Screen
        name="Success"
        component={SuccessTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const tab1 = {
  tabBarLabel: 'JSON',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_profile_select.png')
          : require('./assets/img/ic_profile.png')
      }
    />
  ),
};

const tab2 = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_card_select.png')
          : require('./assets/img/ic_card.png')
      }
    />
  ),
};

const SuccessTabs = () => {
  return (
    <Tab.Navigator initialRouteName="JSON">
      <Tab.Screen name="JSON" component={JSONFeedScreen} options={tab1} />
      <Tab.Screen name="Camera" component={CameraScreen} options={tab2} />
    </Tab.Navigator>
  );
};

export default RootStack;
