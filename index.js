/**
 * @format
 */

import { firebase } from '@react-native-firebase/auth';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs();
// firebase.initializeApp({
//     apiKey: "AIzaSyBA-nJOSHcALkHfR7D7GsBqzU5qmCHY_WA",
//     authDomain: "project-e6136.firebaseapp.com",
//     databaseURL: "https://project-e6136.firebaseio.com",
//     projectId: "project-e6136",
//     storageBucket: "",
//     messagingSenderId: "948984656115"
//   })

AppRegistry.registerComponent(appName, () => App);