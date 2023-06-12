import { createSlice } from '@reduxjs/toolkit';

import { MD } from './Display.constants';

const initialState = {
  gridSize: MD,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setGridSize(state, action) {
      state.gridSize = action.payload;
    },
    updateDisplay(state, action) {
      state.gridSize = action.payload.gridSize;
    },
  },
});

export const { setGridSize, updateDisplay } = displaySlice.actions;

export const selectGridSize = (state) => state.display.gridSize;

export default displaySlice.reducer;
