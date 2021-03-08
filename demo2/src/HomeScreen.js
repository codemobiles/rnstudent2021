import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      <Text>Home</Text>
    </ImageBackground>
  );
}
