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
  const [account, setAccount] = React.useState({
    username: '',
    password: '',
  });

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
        <CMEntry
          icon="user"
          hint="Username"
          onValueChanged={(text) =>
            setAccount({username: text, password: account.password})
          }
        />

        {/* Separator */}
        <View style={{height: 1, backgroundColor: '#fff3', width: null}} />

        {/* Password */}
        <CMEntry
          icon="lock"
          hint="Password"
          isPassword={true}
          onValueChanged={(text) =>
            setAccount({password: text, username: account.username})
          }
        />

        {/* Register Button */}
        <View style={{height: 10}} />
        <Button
          title="Register"
          onPress={() => alert(JSON.stringify(account))}
        />

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

CMEntry = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon name={props.icon} size={35} color="#0007" style={{width: 35}} />
      <TextInput
        onChangeText={props.onValueChanged}
        secureTextEntry={props.isPassword}
        placeholder={props.hint}
        style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
      />
    </View>
  );
};
