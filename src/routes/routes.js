import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatList from '../screens/chat/chatList';

const BottomTabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <BottomTabs.Navigator>
            {/* <BottomTabs.Screen name = "" component={}/> */}
            <BottomTabs.Screen name = "Chat" component={ChatList}/>
            {/* <BottomTabs.Screen name = "" component={}/>
            <BottomTabs.Screen name = "" component={}/> */}
        </BottomTabs.Navigator>
    </NavigationContainer>
  )
}