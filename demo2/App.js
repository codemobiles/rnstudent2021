import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {View, SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const [forceLogin, setForceLogin] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    checkAuthorization();
  }, [isReady]);

  const checkAuthorization = async () => {
    let isAuthorized = await AsyncStorage.getItem('already_logged_in');
    if (isAuthorized && isAuthorized == 'yes') {
      setForceLogin(false);
    }

    setIsReady(true);
  };

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        {isReady && <AppNavigator forceLogin={forceLogin} />}
      </View>
    </NavigationContainer>
  );
}
