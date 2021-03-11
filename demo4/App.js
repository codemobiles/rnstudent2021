import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./src/AppNavigator";

export default function App() {

  // console.disableYellowBox = true

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <AppNavigator/>
      </View>
    </NavigationContainer>
  );
}
