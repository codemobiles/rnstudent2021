import React from 'react';
import {Image, View} from 'react-native';

export const PreviewImage = ({image}) => {
  if (image == null) {
    return (
      <View style={{padding: 70, flex: 1}}>
        <Image
          source={require('../assets/img/cmdev_icon.png')}
          style={{flex: 1, width: '100%'}}
          resizeMode="contain"
        />
      </View>
    );
  }
};
