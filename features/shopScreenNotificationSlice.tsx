import { Product, ShopScreenNotification } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const shopScreenNotificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: [] as ShopScreenNotification[],
  },
  reducers: {
    setShopScreenNotification: (state: any, action: PayloadAction<any>) => {
      state.notification = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShopScreenNotification } =
  shopScreenNotificationSlice.actions;
export const selectShopScreenNotification = (state: any) => state.notification;
export default shopScreenNotificationSlice.reducer;
