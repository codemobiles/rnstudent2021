import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#FF0',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Text style={{fontSize: 40, backgroundColor: 'white'}}>Hey</Text>
    </View>
  );
}
