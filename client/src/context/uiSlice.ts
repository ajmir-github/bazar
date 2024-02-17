import LocalStore from "@/lib/LocalStore";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const localTheme = new LocalStore("theme");
type Theme = "dark" | "light" | "system";

// Define the initial state using that type
const initialState = {
  theme: (localTheme.get() || "system") as Theme,
};

const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export default uiSlice;
