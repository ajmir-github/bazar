// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StoreProvider, AuthProvider } from "@/providers";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "http://192.168.255.232:3001/";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("auth");

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <StoreProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StoreProvider>
  // </React.StrictMode>
);
