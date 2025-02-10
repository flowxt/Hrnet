import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducer";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;
