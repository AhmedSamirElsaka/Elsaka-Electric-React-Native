import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state: any, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;
export const selectProducts = (state: any) => state.products;
export default productsSlice.reducer;
