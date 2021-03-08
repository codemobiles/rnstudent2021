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

export default function HomeScreen() {
  //   let usernamePlaceHolder = 'Username';
  const [usernamePlaceHolder, setUsernamePlaceHolder] = React.useState(
    'Username',
  );

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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 35, width: 35, backgroundColor: 'green'}} />
          <TextInput
            placeholder={usernamePlaceHolder}
            style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
          />
        </View>

        {/* Separator */}
        <View style={{height: 1, backgroundColor: '#fff3', width: null}} />

        {/* Password */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 35, width: 35, backgroundColor: 'red'}} />
          <TextInput
            placeholder="Password"
            style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
          />
        </View>

        {/* Login Button */}
        <View style={{height: 10}} />
        <Button title="Login" onPress={()=>setUsernamePlaceHolder('lek')} />

        {/* Register Button */}
        <View style={{height: 10}} />
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
