import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 'cboard-user-id',
  name: '',
  email: '',
  role: 'user',
  birthdate: new Date(),
  locale: 'en-US',
  password: '',
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
      state.id = action.payload.id || 'cboard-user-id';
      state.name = action.payload.name || '';
      state.email = action.payload.email || '';
      state.role = action.payload.role || 'user';
      state.birthdate = action.payload.birthdate || new Date();
      state.locale = action.payload.locale || 'en-US';
      state.google = action.payload.google || {};
      state.facebook = action.payload.facebook || {};
      state.isFirstLogin = action.payload.isFirstLogin || false;
      state.lastlogin = action.payload.lastlogin || new Date();
      state.isLogged = true;
    },
    logout: (state) => {
      state = initialState; //eslint-disable-line
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
