import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  //it returns an object and it will have action key and reducer key {action:,reduser:}
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    add: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});
export const { increment, decrement, reset, add } = counterSlice.actions;
export default counterSlice.reducer;
