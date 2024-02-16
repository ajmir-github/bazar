import { createSlice } from "@reduxjs/toolkit";
import { localTheme } from "../utils/localStore";

const THEMES = {
  LIGHT: "light",
  DARK: "DARK",
};

const initialState = {
  theme: localTheme.get() || THEMES.LIGHT,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    turnLightMode: (state) => {
      state.theme = localTheme.set(THEMES.LIGHT);
    },
    turnDarkMode: (state) => {
      state.theme = localTheme.set(THEMES.DARK);
    },
  },
});

export default uiSlice;
