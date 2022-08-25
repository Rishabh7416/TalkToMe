
import {SafeAreaView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import { Store } from './src/redux/store/sagaStore';
import Router from './src/router';

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
    <Provider store={Store}>
      <Router/>
      {/* <Routes/> */}
    </Provider>
    </SafeAreaView>
  );
};