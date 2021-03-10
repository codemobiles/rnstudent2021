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
yarn add react-native-iphone-x-helper react-native-svg react-native-qrcode-svg react-native-camera react-native-qrcode-scanner

npx react-native link react-native-iphone-x-helper
npx react-native link react-native-svg
npx react-native link react-native-camera 
npx react-native link react-native-qrcode-scanner

add this line into android/app/build.gradle
missingDimensionStrategy 'react-native-camera', 'general'
multiDexEnabled true



<uses-permission android:name="android.permission.INTERNET" />     
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.VIBRATE"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />


npx react-native run-android device




#Fix No Permission Handler Detect
1. https://github.com/react-native-community/react-native-permissions#ios
$ npm install --save react-native-permissions
# --- or ---
$ yarn add react-native-permissions


2. Add this code into Podfile
  permissions_path = '../node_modules/react-native-permissions/ios'
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts.podspec"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone.podspec"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications.podspec"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary.podspec"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera.podspec"



3. info.plist
  <key>NSCameraUsageDescription</key>
  <string>Your message to user when the camera is accessed for the first time</string>
  <key>NSMicrophoneUsageDescription</key>
  <string>Your message to user when the microphone is accessed for the first time</string>
  

  https://www.youtube.com/watch?v=aAXwCs5MGfg