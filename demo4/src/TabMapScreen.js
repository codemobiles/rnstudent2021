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

  return <MapView initialRegion={region} style={{flex: 1}}>
    <Marker coordinate={region}/> 
  </MapView>;
}
