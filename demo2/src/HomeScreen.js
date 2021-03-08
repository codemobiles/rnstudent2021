import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
  Button,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      <Image
        style={{width: '100%'}}
        source={require('./assets/img/header_react_native.png')}
      />
      <Text>Home</Text>
    </ImageBackground>
  );
}
