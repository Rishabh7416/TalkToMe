import React from 'react';
import {Image} from 'react-native';
import {vw} from '../utils/dimensions';
import {routeStyles} from './routeStyles';
import ChatList from '../screens/chat/chatList';
import VideoCall from '../screens/video/videoCall';
import Settings from '../screens/settings/settings';
import ChatScreen from '../screens/chatscreen/chatScreen';
import ContactList from '../screens/contacts/contactList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="screens" component={BottomTabRoutes} />
        <Stack.Screen name="chatlistscreen" component={ChatList} />
        <Stack.Screen name="chatscreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
              style={routeStyles.iconStyle}
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
              style={{
                height: vw(19),
                width: vw(25.33),
                resizeMode: 'contain',
              }}
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
              style={{width: 22, height: 20.62, resizeMode: 'contain'}}
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
              style={{width: 19.47, height: 20}}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
