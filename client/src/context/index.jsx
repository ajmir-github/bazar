import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import authSlice from "./authSlice";
import { Provider } from "react-redux";

export const uiActions = uiSlice.actions;
export const AuthActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
