import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ContactList() {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('Chat')}>ContactList</Text>
    </View>
  );
}
