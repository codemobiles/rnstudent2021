import React from 'react';
import {Image} from 'react-native';

export const PreviewImage = ({image}) => {
  if (image == null) {
    return (
      <Image
        source={require('../assets/img/cmdev_icon.png')}
        style={{flex: 1, width: '100%'}}
      />
    );
  }
};
