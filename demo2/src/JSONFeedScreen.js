import React from 'react';
import {View, Text} from 'react-native';

export default function JSONFeedScreen() {
  React.useEffect(() => {
    console.log('Hey');
  }, []);

  return (
    <View style={{flex: 1}}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Text key={item.toString()}>JSONFeedScreen {item}</Text>
      ))}
    </View>
  );
}
