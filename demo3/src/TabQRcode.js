import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import QRCode from 'react-native-qrcode-svg';
const PATH_TO_LOGO = './img/cmdev_icon.png';

export default function TabQRcode() {
  return (
    <View>
      <Text>TabQRcode</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    paddingTop: 15,
    paddingBottom: 15,
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
});
