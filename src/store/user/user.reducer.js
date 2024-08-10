import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: undefined,
  phoneNumber: undefined,
  userId: undefined,
  username: undefined,
  type: 'Bearer',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleAuth(state, action) {
      if (action.payload !== undefined) {
        state.token = action.payload.token;
        state.phoneNumber = action.payload.phoneNumber;
        state.userId = action.payload.userId;
        state.username = action.payload.username;
      } else {
        state.token = undefined;
      }
    },
  },
});

export default userSlice;
export const { toggleAuth } = userSlice.actions;
