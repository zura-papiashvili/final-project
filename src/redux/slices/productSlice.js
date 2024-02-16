import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, productId }, { rejectWithValue, dispatch }) => {
    try {
      const method = productId ? "put" : "post";
      const endpoint = productId ? `/products/${productId}` : "/products";
      const { data } = await axiosInstance[method](endpoint, { product });
      dispatch(fetchHomePageProducts());
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
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ productId }, { dispatch, rejectWithValue }) => {
    try {
      const method = "delete";
      const endpoint = `/products/${productId}`;
      const { data } = await axiosInstance[method](endpoint);
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {
      return rejectWithValue("Error deleting product");
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
    selectedProduct: null,
  },
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
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

    // deleteProduct
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
