import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import axios from 'axios';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import {YouTubeStandaloneIOS} from 'react-native-youtube';

export default function JSONFeedScreen() {
  const [dataArray, setDataArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    loadData();
  }, []);

  loadData = async () => {
    // show loading
    setIsLoading(true);
    setDataArray([]);

    // https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods
    let url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = 'admin'; // await AsyncStorage.getItem('username')
    let regPassword = 'password'; // await AsyncStorage.getItem('password')
    let data = `username=${regUsername}&password=${regPassword}&type=foods`;
    const response = await axios.post(url, data);
    setDataArray(response.data.youtubes);

    // hide loading
    setIsLoading(false);
  };

  playAndroidYoutube = (videoId) => {
    // props.navigation.navigate("Youtube", {item})
    YouTubeStandaloneAndroid.playVideo({
      apiKey: 'YOUR_API_KEY', // Your YouTube Developer API Key
      videoId, // YouTube video ID
      autoplay: true, // Autoplay the video
      startTime: 0, // Starting point of video (in seconds)
    })
      .then(() => console.log('Standalone Player Exited'))
      .catch((errorMessage) => console.error(errorMessage));
  };

  playiOSYoutube = (videoId) => {
    YouTubeStandaloneIOS.playVideo(videoId)
      .then((message) => console.log(message))
      .catch((errorMessage) => console.error(errorMessage));
  };

  renderRow = ({item, index}) => {
    const {title, subtitle, avatar_image, youtube_image} = item;
    return (
      <TouchableOpacity
        style={styles.listCard}
        onPress={() => {
          Platform.OS == 'android'
            ? playAndroidYoutube(item.id)
            : playiOSYoutube(item.id);
        }}>
        {/* Top section */}
        <View style={styles.listCardView}>
          {/* Avatar */}
          <Image style={styles.listAvatar} source={{uri: avatar_image}} />
          {/* Title and Subtitle */}
          <View style={styles.listTitleSubtitleContainer}>
            <Text style={styles.listTitle}>{title}</Text>
            <Text style={styles.listSubTitle}>{subtitle}</Text>
          </View>
        </View>
        {/* Bottom section */}
        <Image style={styles.listYoutbeImage} source={{uri: youtube_image}} />
      </TouchableOpacity>
    );
  };

  renderHeader = () => (
    <Image
      source={require('./assets/img/header_react_native.png')}
      resizeMode="contain"
      style={{height: 100, width: '100%'}}
    />
  );

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      <FlatList
        refreshing={isLoading}
        onRefresh={loadData}
        data={dataArray}
        ListHeaderComponent={renderHeader}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});
