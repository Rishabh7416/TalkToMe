import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {Store} from './src/redux/store/store';
import {StackNavigation} from './src/routes/routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={Store}>
        <StackNavigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
