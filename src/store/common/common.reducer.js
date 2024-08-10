import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snackbar: {
    openSnackbar: false,
    message: '',
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSnackbar(state, action) {
      const { openSnackbar, message } = action.payload;
      state.snackbar.openSnackbar = openSnackbar;
      state.snackbar.message = message;
    },
  },
});

export default commonSlice;
export const { setSnackbar } = commonSlice.actions;
