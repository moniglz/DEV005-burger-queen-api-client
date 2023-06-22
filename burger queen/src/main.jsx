import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Waiter } from "./components/waiter"
import { Admin } from "./components/Admin";
import { Chef } from "./components/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/waiter",
    element: <Waiter />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/chef",
    element: <Chef />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>
);