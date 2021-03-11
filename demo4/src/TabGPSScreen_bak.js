import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {submitLocation} from './LocationTrackingAPI';

// https://github.com/react-community/react-native-maps/blob/master/docs/mapview.md
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

import SegmentedControlTab from 'react-native-segmented-control-tab';

const TabGPSScreen = () => {
  let watchId = null;
  const [mapType, setMapType] = useState('standard');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [position, setPosition] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
  });

  // const [latitude, setLatitude] = useState(LATITUDE);
  // const [longitude, setLongitude] = useState(LONGITUDE);
  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  );

  useEffect(() => {
    if (Platform.OS == 'android') {
      requestLocationPermission();
    } else {
      startLocationTracking();
    }

    return () => {
      // clean up
      navigator && navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const startLocationTracking = () => {
    navigator.geolocation = require('@react-native-community/geolocation');

    watchId = navigator.geolocation.watchPosition(
      async (position) => {
        console.log(JSON.stringify(position));
        coordinate.timing(position.coords).start();
        setPosition(position.coords); // const {latitude, longitude} = position.coords;
        await submitLocation(position.coords);
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      {
        // option
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000,
      },
    );
  };

  async function requestLocationPermission() {
    const checkLocationPermission = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (checkLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      startLocationTracking();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location permission is required',
            message: 'Please grant the permission.',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          startLocationTracking();
        } else {
          alert("You don't have access for the location");
        }
      } catch (err) {
        alert(err);
      }
    }
  }

  function changeMapType(index) {
    setSelectedIndex(index);

    if (index == 0) {
      setMapType('standard');
    } else if (index == 1) {
      setMapType('satellite');
    } else {
      setMapType('hybrid');
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        mapType={mapType}
        style={styles.map}
        showUserLocation
        followUserLocation
        showsMyLocationButton
        loadingEnabled
        region={{
          ...position,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker.Animated coordinate={coordinate}>
          <Image
            source={require('./assets/img/cmdev_icon.png')}
            style={{
              height: 30,
              width: 30,
              borderColor: 'white',
              borderRadius: 15,
              borderWidth: 2,
            }}
          />
        </Marker.Animated>
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(position.latitude).toFixed(3)},
            {parseFloat(position.longitude).toFixed(3)} °
          </Text>
        </TouchableOpacity>
      </View>

      <SegmentedControlTab
        selectedIndex={selectedIndex}
        values={['Standard', 'Sattile', 'Hybrid']}
        onTabPress={(index) => changeMapType(index)}
      />

      <Image
        resizeMode="contain"
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#000000',
          marginTop: 10,
        }}
        source={require('./assets/img/banner_react_map.png')}
      />
    </View>
  );
};

export default TabGPSScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
