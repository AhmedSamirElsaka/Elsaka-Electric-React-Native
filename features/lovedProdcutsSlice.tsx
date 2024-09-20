import { Product } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LovedProductsState {
  lovedProducts: Product[];
}

const initialState: LovedProductsState = {
  lovedProducts: [],
};

export const lovedProductsSlice = createSlice({
  name: "lovedProducts",
  initialState,
  reducers: {
    setLovedProducts: (state, action: PayloadAction<Product[]>) => {
      state.lovedProducts = action.payload;
    },
    addLovedProduct: (state, action: PayloadAction<Product>) => {
      const productExists = state.lovedProducts.some(
        (product) => product.id === action.payload.id
      );
      if (!productExists) {
        state.lovedProducts.push(action.payload);
      }
    },
    removeLovedProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.lovedProducts = state.lovedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLovedProducts, addLovedProduct, removeLovedProduct } =
  lovedProductsSlice.actions;

export const selectLovedProducts = (state: {
  lovedProducts: LovedProductsState;
}) => state.lovedProducts.lovedProducts;

export default lovedProductsSlice.reducer;
