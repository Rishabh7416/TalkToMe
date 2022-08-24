import React from 'react';
import {Image} from 'react-native';
import ChatList from '../screens/chat/chatList';
import {LocalImages} from '../utils/localImages';
import VideoCall from '../screens/video/videoCall';
import Settings from '../screens/settings/settings';
import ContactList from '../screens/contacts/contactList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator screenOptions={{headerShown: false}}>
        <BottomTabs.Screen
          name="Contacts"
          component={ContactList}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={focused ? require('../assets/images/contactsIcon.png') : ''}
                style={{height: 20, width: 20}}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Chat"
          component={ChatList}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
                }}
                style={{height: 20, width: 20}}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Video"
          component={VideoCall}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
                }}
                style={{height: 20, width: 20}}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
                }}
                style={{height: 20, width: 20}}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
