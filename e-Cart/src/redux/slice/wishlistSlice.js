import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter((pro) => pro.id !== action.payload);
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export const { removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
