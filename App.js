import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
import {StackNavigation} from './src/routes/routes';
import {persistor, Store} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <SafeAreaView style={{flex: 1}}>
        <Provider store={Store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <StackNavigation />
          {/* </PersistGate> */}
        </Provider>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;
