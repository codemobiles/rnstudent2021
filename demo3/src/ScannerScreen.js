import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function ScannerScreen() {
  return (
    <View>
      <Text>ScannerScreen</Text>
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
    height: 50,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
});
