import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#FF0',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
      }}>
      <Text
        style={{
          fontSize: 40,
          backgroundColor: 'white',
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        1
      </Text>
      <Text
        style={{
          fontSize: 40,
          backgroundColor: 'red',
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        2
      </Text>
      <Text
        style={{
          fontSize: 40,
          backgroundColor: 'purple',
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        3
      </Text>
      <Text
        style={{
          fontSize: 40,
          backgroundColor: 'pink',
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        4
      </Text>
      <Text
        style={{
          fontSize: 40,
          backgroundColor: 'green',
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        5
      </Text>
    </View>
  );
}
