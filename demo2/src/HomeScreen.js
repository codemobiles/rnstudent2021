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
import AsyncStorage from '@react-native-community/async-storage';

export default function HomeScreen(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');


  React.useEffect(() => {
    
  }, [])

  const submit = async () => {
    let _regUsername = await AsyncStorage.getItem('username');
    let _regPassword = await AsyncStorage.getItem('password');
    if (_regUsername == username && _regPassword == password) {
      await AsyncStorage.setItem('already_logged_in', 'yes');
      // props.navigation.dispatch(StackActions.replace('Success'));
      props.navigation.navigate('Success');
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
  }
 

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
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
          />
        </View>

        {/* Separator */}
        <View style={{height: 1, backgroundColor: '#fff3', width: null}} />

        {/* Password */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 35, width: 35, backgroundColor: 'red'}} />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            style={{backgroundColor: '#0003', flex: 1, marginLeft: 5}}
          />
        </View>

        {/* Login Button */}
        <View style={{height: 10}} />
        <Button title="Login" onPress={submit} />

        {/* Register Button */}
        <View style={{height: 10}} />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Register')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
