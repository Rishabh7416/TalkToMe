import { View, Text } from 'react-native'
import React from 'react'

export default function IsTypingStatusComponent({status}) {
  return (
    <View>
      <Text>{status}</Text>
    </View>
  )
}