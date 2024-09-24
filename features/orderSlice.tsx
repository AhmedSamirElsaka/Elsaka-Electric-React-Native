import { Cart, Order } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [] as Order[],
  },
  reducers: {
    setOrders: (state: any, action: PayloadAction<any>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<any>) => {
      const OrderExists = state.orders.some(
        (order) => order.orderNumber === action.payload.orderNumber
      );
      if (!OrderExists) {
        state.orders.push({
          orderNumber: action.payload.orderNumber,
          quantity: action.payload.quantity,
          amount: action.payload.amount,
          // Add any other required properties of the Order type here
        } as Order);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrders, addOrder } = orderSlice.actions;
export const selectOrders = (state: any) => state.orders;
export default orderSlice.reducer;
