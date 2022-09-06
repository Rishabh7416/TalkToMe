import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: {},
  userAbout: {},
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload;
    },
    aboutUsers: (state, action) => {
      state.userAbout = action.payload;
    },
  },
});

export const {addUsers, aboutUsers} = slice.actions;
export default slice.reducer;
