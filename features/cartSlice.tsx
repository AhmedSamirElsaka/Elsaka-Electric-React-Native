import { cart } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [] as cart[],
  },
  reducers: {
    setCarts: (state: any, action: PayloadAction<any>) => {
      state.carts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCarts } = cartsSlice.actions;
export const selectCarts = (state: any) => state.carts;
export default cartsSlice.reducer;
