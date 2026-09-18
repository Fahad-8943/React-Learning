import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slice/productSlice";
import wishlistReducer from "../redux/slice/wishlistSlice";


const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
