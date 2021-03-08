import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign:'center'
        }}>
        555
      </Text>
    </View>
  );
}
