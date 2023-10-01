import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Home from "./Routes/Home";
// import Login from "./Routes/Login";
// import Footer from "./Components/Footer";
// import { RouteList } from "./Routes";
import App from "./App";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       }
//     ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />   
  </React.StrictMode>
);
