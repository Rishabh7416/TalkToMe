import React from 'react';
import Routes from './src/routes/routes';
import {SafeAreaView} from 'react-native';
import Trial from './src/trialFolder/trial';

export default function App() {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <Routes/>
      {/* <Trial/> */}
    </SafeAreaView>
  );
}
