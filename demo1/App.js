import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#FF0',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexDirection: 'column',
      }}>
      <Text style={{fontSize: 40, backgroundColor: 'white'}}>1</Text>
      <Text style={{fontSize: 40, backgroundColor: 'red'}}>2</Text>
      <Text style={{fontSize: 40, backgroundColor: 'purple'}}>3</Text>
      <Text style={{fontSize: 40, backgroundColor: 'pink'}}>4</Text>
      <Text style={{fontSize: 40, backgroundColor: 'green'}}>5</Text>
    </View>
  );
}
