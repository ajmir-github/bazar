import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  signed: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (_, { payload }) => {
      return {
        signed: true,
        user: payload,
      };
    },
    signOut: () => initialState,
  },
});

export default authSlice;
