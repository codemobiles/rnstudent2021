import React from 'react';
import {View, Text} from 'react-native';

export default function JSONFeedScreen() {
  const [dataArray, setDataArray] = React.useState([]);

  React.useEffect(() => {
    console.log('Hey');
    setDataArray([1, 2, 3, 4, 5, 6, 7, 8]);   
  }, []);

  return (
    <View style={{flex: 1}}>
      {dataArray.map((item) => (
        <Text key={item.toString()}>JSONFeedScreen {item}</Text>
      ))}
    </View>
  );
}
