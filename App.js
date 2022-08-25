import React from 'react';
import Routes from './src/routes/routes';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <Routes/>
    </SafeAreaView>
  );
}
