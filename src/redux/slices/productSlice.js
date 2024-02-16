import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async (product, { rejectWithValue }) => {
    try {
      const method = "post";
      const endpoint = "/products";
      const { data } = await axiosInstance[method](endpoint, { product });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, { rejectWithValue }) => {
    try {
      const method = "get";
      const endpoint = "/products";
      const { data } = await axiosInstance[method](endpoint);
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching products");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    // products: [],
    loading: false,
    error: null,
    homePageProducts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state, action) => {
      //   state.products = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(saveProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.homePageProducts = action.payload.products;
      state.loading = false;
    });
    builder.addCase(fetchHomePageProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const productReducer = productSlice.reducer;
