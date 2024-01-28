import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    nulled: (state) => {
      state.value = 0;
    },
  },
});

export const { increament, decrement, nulled } = countSlice.actions;
export const selectCount = (state) => state.counter.value;

export default countSlice.reducer;
