import React from 'react';
import {Image} from 'react-native';
import ChatList from '../screens/chat/chatList';
import VideoCall from '../screens/video/videoCall';
import Settings from '../screens/settings/settings';
import ContactList from '../screens/contacts/contactList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { vw, vh, normalize } from '../utils/dimensions';

const BottomTabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
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
                style={{height: vw(20), width: vw(20), resizeMode: 'contain'}}
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
                source={require('../assets/images/chatIcon.png')}
                style={{height: vw(25), width: vw(25), resizeMode: 'contain'}}
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
                source={require('../assets/images/video.png')}
                style={{height: vw(20), width: vw(20), resizeMode: 'contain'}}
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
                source={require('../assets/images/settings.png')}
                style={{height: vw(20), width: vw(20), resizeMode: 'contain'}}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
