import React from 'react';

import {
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';


export default function TabScanner() {
  return (
    <View>
      <Text>TabScanner</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonTouchable: {
    flex: 1,
    height: 100,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
});
