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
import {PreviewImage} from './Util/PreviewImage';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

export default function CameraScreen() {
  const [image, setImage] = useState(null);

  // stub function
  openCamera = async (cropIt) => {
    let image = await ImagePicker.openCamera({
      cropping: cropIt,
      width: 500, // width after cropped
      height: 500, // height after cropped
      includeExif: true,
    });

    setImage({uri: image.path, width: image.width, height: image.height});
  };
  openPhotoGallery = async (cropIt) => {
    let image = await ImagePicker.openPicker({
      // width: 300, // width after cropped
      // height: 300, // height after cropped
      cropping: cropIt,
      compressImageMaxWidth: 640, // max width compress if not croppred
      compressImageMaxHeight: 480, // max height compress if not croppred
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    });

    setImage({
      uri: image.path,
      width: image.width,
      height: image.height,
      mime: image.mime,
    });
  };

  const uploadWithAxios = async () => {
    const data = new FormData();
    data.append('username', 'codemobiles'); // you can append anyone.
    data.append('password', '1234'); // you can append anyone.
    data.append('userfile', {
      uri: image.uri,
      type: 'image/jpeg', // or photo.type
      name: 'testPhotoName.jpg',
    });

    let result = await axios.post('http://192.168.0.173:3000/uploads', data);
    console.log(JSON.stringify(result.data));
    Alert.alert(JSON.stringify(result.data));
  };


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

      <PreviewImage image={image} />

      {image && (
        <TouchableOpacity
          onPress={() => uploadWithAxios(image)}
          style={styles.upload_button}>
          <Text style={styles.text}>UPLOAD</Text>
        </TouchableOpacity>
      )}
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
