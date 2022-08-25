import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/login'
const index = () => {
    const Stack=createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='login' component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index