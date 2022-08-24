import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Story from './src/components/stories/story';
import ChatList from './src/screens/chat/chatList';

export default function App() {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <ChatList/>
    </SafeAreaView>
  );
}
