import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

type RegisterUserProps  = {
    email: string
    password: string
}

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
}
    
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action) => {
        state.userInfo = action.payload
      },
      logout: (state) => {
        state.userInfo = null
      }
    },
   
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.userInfo;

export default authSlice.reducer