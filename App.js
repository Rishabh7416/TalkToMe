import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {StackNavigation} from './src/routes/routes';
import {persistor, Store} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
