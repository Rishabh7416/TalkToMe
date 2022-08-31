import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: {},
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {addUsers, addUid} = slice.actions;
export default slice.reducer;
