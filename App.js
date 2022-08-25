import React from 'react';
import {Provider} from 'react-redux';
import { Store } from './src/redux/store/sagaStore';
import Router from './src/router';

const App = () => {
  return (
    <Provider store={Store}>
      <Router/>
    </Provider>
  );
};

export default App;
