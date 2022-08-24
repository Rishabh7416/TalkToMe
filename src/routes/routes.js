import React from 'react';
import ChatList from '../screens/chat/chatList';
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
        <BottomTabs.Screen name="Chat" component={ChatList} />
        <BottomTabs.Screen name="Contacts" component={ContactList} />
        <BottomTabs.Screen name="Video" component={VideoCall} />
        <BottomTabs.Screen name="Settings" component={Settings} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
