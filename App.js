import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store/sagaStore';
// import Router from './src/router';
import Routes,{StackNavigation} from './src/routes/routes';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <Provider store={Store}>
        {/* <Routes /> */}
        <StackNavigation/>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
