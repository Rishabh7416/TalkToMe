import React from 'react';
import {Image} from 'react-native';
import LoginScreen from '../screens/login';
import ChatList from '../screens/chat/chatList';
import VideoCall from '../screens/video/videoCall';
import Settings from '../screens/settings/settings';
import ChatScreen from '../screens/chatscreen/chatScreen';
import ContactList from '../screens/contacts/contactList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routeStyles} from '../routes/routeStyles';
import {vh, vw} from '../utils/dimensions';
import SignUpScreen from '../screens/signUp';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export const StackNavigation = () => {
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

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="screens" component={BottomTabRoutes} />
      <Stack.Screen name="chatlistscreen" component={ChatList} />
      <Stack.Screen name="chatscreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

function BottomTabRoutes() {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen
        name="Contacts"
        component={ContactList}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/contactIcon.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Chat"
        component={ChatList}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/contactIcon.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Video"
        component={VideoCall}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/contactIcon.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/contactIcon.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
