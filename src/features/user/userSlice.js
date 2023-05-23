import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 'cboard-user-id',
  name: '',
  email: '',
  role: 'user',
  birthdate: new Date(),
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
    logout: (state) => {
      state = initialState; //eslint-disable-line
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
