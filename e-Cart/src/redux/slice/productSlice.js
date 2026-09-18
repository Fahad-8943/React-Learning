import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    localStorage.setItem("products", JSON.stringify(result.data.products))
    return result.data.products;
  },
);

const productSlice = createSlice({
  name: "Products",
  initialState: {
    loading: true,
    allProducts: [],
    dummyProduct: [],
    error: "",
  },
  reducers: {
    searchProudct: (state, action) => {
      const query = action.payload.toLowerCase();

      state.allProducts = state.dummyProduct.filter((pro) =>
        pro.title.toLowerCase().includes(query),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.allProducts = [];
      state.dummyProduct = [];
      state.error = "";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.dummyProduct = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.dummyProduct = [];
      state.error = "API Call Failed";
    });
  },
});

export const { searchProudct } = productSlice.actions;

export default productSlice.reducer;
