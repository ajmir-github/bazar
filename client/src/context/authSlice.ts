import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for the slice state
interface AuthState {
  user: null | object;
  signed: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  signed: false,
};

const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (
      _,
      {
        payload: { token, user },
      }: PayloadAction<{ token: string; user: object }>
    ) => {
      localStorage.setItem("auth", token);
      axios.defaults.headers.common["Authorization"] = token;

      return {
        signed: true,
        user,
      };
    },
    signOut: () => {
      localStorage.removeItem("auth");
      delete axios.defaults.headers.common["Authorization"];
      return initialState;
    },
  },
});

export default authSlice;
