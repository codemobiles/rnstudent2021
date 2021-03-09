import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function JSONFeedScreen() {
  const [dataArray, setDataArray] = React.useState([]);

  React.useEffect(() => {
    console.log('Hey');
    setDataArray([1, 2, 3, 4, 5, 6, 7, 8]);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataArray}
        renderItem={({item, index}) => <Text style={styles.body}>{item}</Text>}
        keyExtractor={(item) => {
          return item.toString();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  body: {
    color: 'white',
  },
});
