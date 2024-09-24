import { Cart } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [] as Cart[],
  },
  reducers: {
    setCarts: (state: any, action: PayloadAction<any>) => {
      state.carts = action.payload;
    },
    addCart: (state, action: PayloadAction<any>) => {
      const cartExists = state.carts.some(
        (cart) => cart.product.id === action.payload.id
      );
      if (!cartExists) {
        state.carts.push({ product: action.payload, count: "1" } as Cart);
      }
    },
    removeCart: (state, action: PayloadAction<{ id: string }>) => {
      state.carts = state.carts.filter(
        (carts) => carts.product.id !== action.payload.id
      );
    },
    setCartCount: (
      state,
      action: PayloadAction<{ id: string; count: string }>
    ) => {
      const cart = state.carts.find(
        (cart) => cart.product.id === action.payload.id
      );
      if (cart) {
        cart.count = action.payload.count; // Set count to the provided value
      }
    },
    clearCarts: (state) => {
      state.carts = []; // Clear all carts
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCarts, addCart, removeCart, setCartCount, clearCarts } =
  cartsSlice.actions;
export const selectCarts = (state: any) => state.carts;
export default cartsSlice.reducer;
