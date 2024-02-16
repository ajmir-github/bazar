import { ThemeProvider } from "@emotion/react";
import router from "./router";
import { CssBaseline, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
