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
        resizeMode="contain"
        style={{width: '100%'}}
        source={require('./assets/img/header_react_native.png')}
      />
      <View
        style={{
          height: 100,
          backgroundColor: '#FFF',
          marginLeft: 30,
          marginRight: 30,
        }}>
        <TextInput />
      </View>
    </ImageBackground>
  );
}
