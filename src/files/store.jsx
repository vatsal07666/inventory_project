// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import purchaseReducer from "./purchase/purchaseSlice";
import salesReducer from "./sales/salesSlice";
import customerReducer from "./customer/customerSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    purchase: purchaseReducer,
    sales: salesReducer,
    customer: customerReducer,
    user: userSlice,
  },
});

export default store;
