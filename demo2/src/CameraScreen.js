import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  NativeModules,
  Alert,
  Button,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

export default function CameraScreen() {
  return (
    <ImageBackground
      source={require('./assets/img/bg.png')}
      style={{
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image
        style={{marginLeft: 20, marginRight: 20, height: 100, width: null}}
        resizeMode="contain"
        source={require('./assets/img/banner_react_qr_camera.png')}
      />

      {/* Buttons section */}
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {/* CAMERA */}
        <TouchableOpacity
          onPress={() => openCamera(false)}
          style={styles.button}>
          <Text style={styles.text}>CAMERA</Text>
        </TouchableOpacity>

        {/* CAMERA  + CROP*/}
        <TouchableOpacity
          onPress={() => openCamera(true)}
          style={styles.button}>
          <Text style={styles.text}>CAMERA+CROP</Text>
        </TouchableOpacity>

        {/* GALLERY*/}
        <TouchableOpacity
          onPress={() => openPhotoGallery(true)}
          style={styles.button}>
          <Text style={styles.text}>GALLERY</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  button: {
    marginBottom: 10,
    height: 40,
    padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  upload_button: {
    borderRadius: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    width: 300,
    height: 50,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  text_upload: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 10,
    color: '#FFFFFF',
  },
});
