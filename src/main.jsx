import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/LayOut/Main";
import OrderReview from "./Components/OrderReview/OrderReview";
import About from "./Components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('t-shirt.json')
      },
      {
        path: '/order',
        element: <OrderReview></OrderReview>
      },
      {path: '/about',
      element: <About></About>

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
