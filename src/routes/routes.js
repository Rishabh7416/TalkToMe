import React from 'react';
import {Image} from 'react-native';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import ChatList from '../screens/chat/chatList';
import VideoCall from '../screens/video/videoCall';
import Settings from '../screens/settings/settings';
import ChatScreen from '../screens/chatscreen/chatScreen';
import ContactList from '../screens/contacts/contactList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LocalImages from '../utils/localImages';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="routes" component={Routes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Routes({details}) {
  console.log('routes', details);
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
