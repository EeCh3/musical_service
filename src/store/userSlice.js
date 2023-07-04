/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: false,
  id: null,
  token: null,
  isAuth: false
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    userLogin: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isAuth = true
    },
    userLogout: () => initialState,
  },
});

export const { setToken ,userLogin, userLogout } = userSlice.actions
export default userSlice.reducer