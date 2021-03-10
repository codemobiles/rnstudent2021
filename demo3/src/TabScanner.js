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

const TabScanner = (props) => {
  return (
    <ImageBackground
      source={require('./img/gradient_bg.png')}
      resizeMode={'stretch'}
      style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={{
          width: '100%',
          height: 120,
          marginTop: 10,
          padding: 0,
          ...ifIphoneX({marginTop: 30}, {marginTop: 0}),
        }}
        source={require('./img/header_react_native.png')}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          marginBottom: 16,
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        onPress={() => onClickScan(props)}>
        <Image
          source={require('./img/scan_button.png')}
          style={{width: 100, height: 100}}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};


export default TabScanner;

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
