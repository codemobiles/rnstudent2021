import React from 'react';
import {View, SafeAreaView, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
         <AppNavigator />
      </View>
    </NavigationContainer>
  );
}

// import React from 'react';
// import {View, SafeAreaView, StatusBar, LogBox} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import AppNavigator from "./src/AppNavigator";

// export default function App() {

//   LogBox.ignoreAllLogs(true)
//   //console.disableYellowBox = true

//   return (
//     <NavigationContainer>
//       <View style={{flex: 1}}>
//         <AppNavigator/>
//       </View>
//     </NavigationContainer>
//   );
// }
