import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slice/productSlice";
import wishlistReducer from "../redux/slice/wishlistSlice";
import cartReducer from "../redux/slice/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;
