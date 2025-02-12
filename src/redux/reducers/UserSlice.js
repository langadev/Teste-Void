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
    // Login pendente
    loginPending: (state) => {
      state.loading = true;
      state.error = null; // Limpa erros anteriores ao iniciar
    },

    // Login bem-sucedido
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLogged = true;
      state.loading = false;
      state.error = null;
    },

    // Falha no login
    loginFailure: (state, action) => {
      delete loginFetch.defaults.headers.Authorization; // Remove token de autenticação global
      state.loading = false;
      state.error = action.payload;
    },

    // Logout
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

// Exportando actions geradas automaticamente pelo createSlice
export const { loginPending, loginSuccess, loginFailure, logout } = userSlice.actions;

// Exportando o reducer gerado pelo createSlice
export default userSlice.reducer;
