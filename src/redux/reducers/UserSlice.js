import { createSlice } from "@reduxjs/toolkit";
import {loginFetch} from '../../assets/config/axios.js';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    isLogged: false,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
   
    loginPending: (state) => {
      state.loading = true;
      state.error = null; 
    },

   
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLogged = true;
      state.loading = false;
      state.error = null;
    },

    
    loginFailure: (state, action) => {
      delete loginFetch.defaults.headers.Authorization; 
      state.loading = false;
      state.error = action.payload;
    },

  
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLogged = false;
      state.loading = false;
      state.error = null;
    },
  },
});


export const { loginPending, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
