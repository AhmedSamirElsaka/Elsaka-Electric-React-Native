import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import lovedProductsReducer from "./features/lovedProdcutsSlice";
export default configureStore({
  reducer: {
    products: productsReducer,
    lovedProducts: lovedProductsReducer,
  },
});
