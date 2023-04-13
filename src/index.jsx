import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import "./index.css";
import App from "./App";
import ThemeProvider from "./contexts/theme-context";
import AuthProvider from "./contexts/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider >
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
