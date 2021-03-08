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
          backgroundColor: '#FFF7',
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 10,
          padding: 15,
        }}>
        {/* Username */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 35, width: 35, backgroundColor: 'green'}} />
          <TextInput
            placeholder="Username"
            style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
          />
        </View>

        {/* Password */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 35, width: 35, backgroundColor: 'red'}} />
          <TextInput
            placeholder="Password"
            style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
