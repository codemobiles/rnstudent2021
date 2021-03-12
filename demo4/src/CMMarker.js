import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CustomCallout from './CustomCallout';

export default function CMMarker({coordinate, key, onClickCallout}) {
    return (
        <Marker
        key={key}
        coordinate={coordinate}
        onCalloutPress={() => onClickCallout(coordinate)}>
        {/* Icon */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
          <Text
            style={{
              color: '#FFF',
              fontSize: 12,
              backgroundColor: '#0007',
              borderRadius: 3,
            }}>
            {coordinate.latitude.toFixed(2)}°,{' '}
            {coordinate.longitude.toFixed(2)}°{' '}
          </Text>
        </View>

        {/* Callout  */}
        <MapView.Callout tooltip style={styles.customView}>
          <CustomCallout>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              {/** Showing image in android is not possible now (Lib. Bug) */}
              {Platform.OS == 'ios' ? (
                <Image
                  resizeMode="cover"
                  source={require('./assets/img/cmdev_icon.png')}
                  style={{height: 20, width: 20, marginRight: 8}}
                />
              ) : null}

              <Text style={{fontWeight: 'bold'}}>Pos: </Text>
              <Text>
                {parseFloat(coordinate.latitude).toFixed(2)} °,{' '}
                {parseFloat(coordinate.longitude).toFixed(2)} °
              </Text>
            </TouchableOpacity>
          </CustomCallout>
        </MapView.Callout>
      </Marker>
  
    )
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
  