import { View, Text } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore'


export default function Trail() {

  const onSend = () =>{
    firestore().collection('Us').doc('uid').set({
      name: 'Rishabh'
    })
  }

  return (
    <View>
      <Text onPress={() => onSend()}>Trail</Text>
    </View>
  )
}
