import React from 'react';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import {Image, AppState} from 'react-native';
import ChatList from '../screens/chat/chatList';
import VideoCall from '../screens/video/videoCall';
import Settings from '../screens/settings/settings';
import ChatScreen from '../screens/chatscreen/chatScreen';
import ContactList from '../screens/contacts/contactList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LocalImages from '../utils/localImages';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export const StackNavigation = () => {
  const users = useSelector(Store => Store.slice_reducer);
  const appState = React.useRef(AppState.currentState);
  const [status, setStatus] = React.useState('');

  React.useEffect(() => {
    firestore().collection('Users').doc(users.users.uid).update({
      isActive: 'online',
    });
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        firestore().collection('Users').doc(users.users.uid).update({
          isActive: 'online',
        });
      } else {
        firestore().collection('Users').doc(users.users.uid).update({
          isActive: 'offline',
        });
      }
      appState.current = nextAppState;
      setStatus(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="routes" component={Routes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Routes({details}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen lazy={true} name="screens" component={BottomTabRoutes} />
      <Stack.Screen name="chatlistscreen" component={ChatList} />
      <Stack.Screen name="chatscreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

function BottomTabRoutes() {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false, lazy: false}}>
      <BottomTabs.Screen
        name="Contacts"
        component={ContactList}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={LocalImages.contactIcon}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Chat"
        component={ChatList}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={LocalImages.chatIcon}
              style={{height: 19, width: 25.33, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Video"
        component={VideoCall}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={LocalImages.cameraIcon}
              style={{height: 20.62, width: 22, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={LocalImages.settingsIcon}
              style={{height: 20, width: 20, resizeMode: 'contain'}}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
