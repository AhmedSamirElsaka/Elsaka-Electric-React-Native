import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const lovedProductsSlice = createSlice({
  name: "lovedProducts",
  initialState: {
    lovedProducts: [],
  },
  reducers: {
    setlovedProducts: (state: any, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setlovedProducts } = lovedProductsSlice.actions;
export const selectLovedProducts = (state: any) => state.lovedProducts;
export default lovedProductsSlice.reducer;
