import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let existingProduct = state.find((pro) => pro.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.find((pro) => pro.id === action.payload);
      if (product) {
        product.quantity++;
        product.totalPrice = product.quantity * product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.find((pro) => pro.id === action.payload);
      if (!product) return;

      if (product.quantity === 1) {
        return state.filter((pro) => pro.id !== action.payload);
      }

      product.quantity--;
      product.totalPrice = product.quantity * product.price;
    },
    removeFromCart: (state, action) => {
      return state.filter((pro) => pro.id !== action.payload);
    },
    clearCart: () => [],
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
