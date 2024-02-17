import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";
export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async ({ formValues, isLogin }, { rejectWithValue }) => {
    try {
      const endpoint = `/users/${isLogin ? "login" : "register"}`;
      const { data } = await axiosInstance.post(endpoint, formValues);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
