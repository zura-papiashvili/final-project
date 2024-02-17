import { createSlice } from "@reduxjs/toolkit";

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
      const product = action.payload;
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
      const productId = action.payload;
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
});

export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
