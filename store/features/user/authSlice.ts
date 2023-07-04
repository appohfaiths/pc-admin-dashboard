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
    
export const registerUser = createAsyncThunk('auth/register', async ({ email, password }: RegisterUserProps, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        await axios.post(`/api/user/register`, { email, password }, config)
    } catch (error) {
        if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
    });

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Redux actions and reducers go here
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
        state.userInfo = action.payload;
        state.success = true
      state.error = '';
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.error = action.error.message;
    });
    }
});

export default authSlice.reducer