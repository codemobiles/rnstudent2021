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
      <Text>Home</Text>
    </ImageBackground>
  );
}
