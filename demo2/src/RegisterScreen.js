import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      <Image
        resizeMode="contain"
        style={{width: '100%'}}
        source={require('./assets/img/header_react_native.png')}
      />
      <View
        style={{
          backgroundColor: '#FFF7',
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 10,
          padding: 15,
        }}>
        {/* Username */}
        <CMEntry />

        {/* Separator */}
        <View style={{height: 1, backgroundColor: '#fff3', width: null}} />

        {/* Password */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="lock" size={35} color="#0007" />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
          />
        </View>

        {/* Register Button */}
        <View style={{height: 10}} />
        <Button title="Register" onPress={() => alert(username + password)} />

        {/* Cancel Button */}
        <View style={{height: 10}} />
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

CMEntry = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon name="user" size={35} color="#0007" />
      <TextInput
        placeholder="Username"
        style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
      />
    </View>
  );
};
