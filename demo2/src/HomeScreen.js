import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

export default function HomeScreen(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setNavigationOption();
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    let isAuthorized = await AsyncStorage.getItem('already_logged_in');
    if (isAuthorized && isAuthorized == 'yes') {
      let _regUsername = await AsyncStorage.getItem('username');
      let _regPassword = await AsyncStorage.getItem('password');
      console.log('Hey Authen' + _regUsername);
      setUsername(_regUsername);
      setPassword(_regPassword);
    }
  };

  const submit = async () => {
    let _regUsername = await AsyncStorage.getItem('username');
    let _regPassword = await AsyncStorage.getItem('password');
    if (_regUsername == username && _regPassword == password) {
      await AsyncStorage.setItem('already_logged_in', 'yes');
      props.navigation.dispatch(StackActions.replace('Success'));
      // props.navigation.navigate('Success');
    } else {
      alert('Authentication failed!');
    }
  };

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#119CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => alert('www.codemobiles.com')}
          style={{padding: 10}}>
          <Icon
            name="address-card"
            size={20}
            color="#fff"
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      ),
    });
  };

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
        <Input
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Username"
          leftIcon={
            <Icon
              name="user"
              size={24}
              color="black"
              style={{marginRight: 8}}
            />
          }
        />

        {/* Separator */}
        <View style={{height: 1, backgroundColor: '#fff3', width: null}} />

        {/* Password */}
        <Input
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          leftIcon={
            <Icon
              name="lock"
              size={24}
              color="black"
              style={{marginRight: 8}}
            />
          }
        />

        {/* Login Button */}
        <View style={{height: 10}} />
        <Button title="Login" onPress={submit} />

        {/* Register Button */}
        <View style={{height: 10}} />
        <Button
          title="Register"
          type="outline"
          onPress={() => props.navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}
