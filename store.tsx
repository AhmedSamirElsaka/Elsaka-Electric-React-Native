import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import lovedProductsReducer from "./features/lovedProdcutsSlice";
import notificationReducer from "./features/shopScreenNotificationSlice";
import cartsReducer from "./features/cartSlice";
export default configureStore({
  reducer: {
    products: productsReducer,
    lovedProducts: lovedProductsReducer,
    notification: notificationReducer,
    carts: cartsReducer,
  },
});
