import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function JSONFeedScreen() {
  const [dataArray, setDataArray] = React.useState([]);

  React.useEffect(() => {
    console.log('Hey');
    setDataArray([1, 2, 3, 4, 5, 6, 7, 8]);
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={dataArray}
        renderItem={({item, index}) => <Text>{item}</Text>}
        keyExtractor={(item) => {
          return item.toString();
        }}
      />
    </View>
  );
}
