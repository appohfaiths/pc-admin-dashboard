import { s } from "@fullcalendar/core/internal-common";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
    isAuthenticated: false,
}
    
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action) => {
            return {
                ...state,
                userInfo: action.payload,
                isAuthenticated: true
        }
      },
      logout: (state) => {
          return {
              ...state,
              userInfo: null,
              isAuthenticated: false
        }
      }
    },
   
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.userInfo;

export default authSlice.reducer