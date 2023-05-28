import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 'cboard-user-id',
  name: '',
  email: '',
  role: 'user',
  //birthdate: new Date(),
  locale: 'en-US',
  google: {},
  facebook: {},
  isFirstLogin: true,
  lastlogin: null,
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      Object.entries(initialState).forEach(([key, value]) => {
        state[key] = action.payload[key] || value;
      });
      state.isLogged = true;
    },
    logout: () => initialState,
    updateUserData: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
  },
});

export const { login, logout, updateUserData } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectIsLogged = (state) => state.user.isLogged;

export default userSlice.reducer;
