import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import loginStyle from './loginStyle'
const LoginScreen = () => {
  return (
    <View style={loginStyle.main}>
      <Text style={loginStyle.bigText}>Let’s Get Started</Text>
      <Text style={loginStyle.descriptionText}>Connect with each other while chatting or calling. Enjoy safe and private texting</Text>
      <TouchableOpacity style={loginStyle.btnStyle}>
          <Text>Join Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen