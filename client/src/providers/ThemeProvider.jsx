import { ThemeProvider as Provider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import conditionalReturn from "../utils/conditionalReturn";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightMode = createTheme({
  palette: {
    mode: "light",
  },
});
export default function ThemeProvider({ children }) {
  const { theme } = useSelector((s) => s.ui);

  return (
    <Provider
      theme={conditionalReturn(theme, {
        light: lightMode,
        dark: darkTheme,
        defaultCase: lightMode,
      })}
    >
      <CssBaseline />
      {children}
    </Provider>
  );
}
