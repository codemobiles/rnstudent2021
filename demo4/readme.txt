https://console.developers.google.com/


yarn add == npm i

ชุดที่หนึ่ง
    yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-permissions
    yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view    
    
    npx react-native link react-native-gesture-handler
    npx react-native link react-native-reanimated
    npx react-native link react-native-screens
    npx react-native link react-native-safe-area-context
    npx react-native link @react-native-community/masked-view          
    npx react-native link react-native-permissions

ชุดที่สอง
yarn add react-native-segmented-control-tab react-native-maps react-native-open-maps @react-native-community/geolocation @react-native-community/async-storage axios


npx react-native link react-native-maps 
npx react-native link @react-native-community/geolocation
npx react-native link @react-native-community/async-storage    

yarn add 

#Android Permission
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/> 
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />


    android:usesCleartextTraffic="true"

https://console.developers.google.com/?hl=th&pli=1

<meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="AIzaSyDjn0Uytv_FSUwwpOUTVCvL4vKYU7Ev7VU"/>


supportLibVersion = "28.0.3"            



  permissions_path = '../node_modules/react-native-permissions/ios'

  pod 'Permission-LocationAccuracy', :path => "#{permissions_path}/LocationAccuracy"
  pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
  pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"