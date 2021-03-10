import React, {useState, useEffect} from 'react';


import {View, SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {

  const [forceLogin, setForceLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <AppNavigator forceLogin={false} />
      </View>
    </NavigationContainer>
  );
}
