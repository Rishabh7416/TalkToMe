import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {Store} from './src/redux/store/sagaStore';
// import {StackNavigation} from './src/routes/routes';
import Trail from './src/trialFolder/trial'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={Store}>
        {/* <StackNavigation /> */}
        <Trail/>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
