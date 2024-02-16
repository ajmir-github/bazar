import router from "./router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import ThemeProvider from "./providers/ThemeProvider";
import { StoreProvider } from "./context";

export default function App() {
  return (
    <StoreProvider>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </StoreProvider>
  );
}
