import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const outputSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.text = action.payload;
    },
    addPhrase: (state, action) => {
      state.text = state.text.concat(action.payload, ' ');
    },
    clear: (state) => {
      state.text = '';
    },
    backSpace: (state) => {
      const newText = state.text.trim().split(' ').slice(0, -1).join(' ');
      state.text = newText.length > 0 ? newText + ' ' : newText;
    },
  },
});

export const selectText = createSelector(
  (state) => state.output.text,
  (text) => text
);

export const { setValue, addPhrase, clear, backSpace } = outputSlice.actions;

export default outputSlice.reducer;
