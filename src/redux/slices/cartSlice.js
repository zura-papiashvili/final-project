import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cartItems }, { rejectWithValue, dispatch }) => {
    try {
      const endpoint = `/users/${userId}/cart`;
      await axiosInstance.put(endpoint, {
        products: cartItems,
      });
    } catch (error) {
      return rejectWithValue("Error saving cart");
    }
  }
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId, { rejectWithValue }) => {
    try {
      const endpoint = `/users/${userId}/cart`;
      const { data } = await axiosInstance.get(endpoint);
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: null,
    cartItems: [],
  },
  reducers: {
    clearCart(state) {
      state.cartItems = [];
    },
    addToCart(state, action) {
      const product = action.payload.product;
      const existingProduct = state.cartItems.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        const updatedCart = state.cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.cartItems = updatedCart;
      } else {
        state.cartItems.push({ quantity: 1, ...product });
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload.product._id;
      const existingProduct = state.cartItems.find(
        (item) => item._id === productId
      );
      if (existingProduct.quantity > 1) {
        const updatedCart = state.cartItems.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        state.cartItems = updatedCart;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== productId
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveCart.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(saveCart.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cart;
      state.loading = false;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
