import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CustomCallout from './CustomCallout';
import openMap from 'react-native-open-maps';
const {width, height} = Dimensions.get('window');
import {submitLocation, queryLocations} from './LocationTrackingAPI';
import CMMarker from "./CMMarker"

const ASPECT_RATIO = width / height;
// 13.6970244,100.5130343 codemobiles office
const LATITUDE = 13.7853726;
const LONGITUDE = 100.5714823;
const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function TabMapScreen() {
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    loadMarkers();
  }, []);

  async function loadMarkers() {
    let result = await queryLocations()

    let tmp = [];
    result.data.forEach(item => {
      tmp = [...tmp, {coordinate: item, key: tmp.length.toString()}];
    });

    setMarkers(tmp);
  }


  const addMarker = async (coordinate) => {
    setMarkers([...markers, {coordinate, key: markers.length.toString()}]);

    let result = await submitLocation(coordinate)
    console.log(JSON.stringify(result));
  };

  function onClickCallout({latitude, longitude}) {
    openMap({query: `${latitude}, ${longitude}`, provider: 'google'});
  }
  

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={region}
        onPress={(e) => addMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        mapType="satellite" // NORMAL, SATELLITE, HYBRID
      >
        {markers.map(({coordinate, key}) => (

         <CMMarker coordinate={coordinate} key={key} onClickCallout={onClickCallout} />
      ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  banner: {
    height: 80,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  customView: {
    width: Platform.OS == 'ios' ? 190 : 160,
    height: 100,
  },
});
