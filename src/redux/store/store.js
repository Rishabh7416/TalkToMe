import {configureStore} from '@reduxjs/toolkit';
import sliceReducer from '../reducers/reducers';

export const Store = configureStore({
  reducer: {
    slice_reducer: sliceReducer,
  },
});
