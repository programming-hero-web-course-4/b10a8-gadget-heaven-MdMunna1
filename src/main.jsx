import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/Home";
import Statik from "./page/Statik";
import Dash from "./page/Dash";
import Smart from "./page/Smart";

import AllProduct from "./component/AllProduct";
import Details from "./component/Details";
import Munna from "./Munna";
import Wishlist from "./Wishlist";
import Eror from "./Eror";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <AllProduct />,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/category/:category",
            element: <AllProduct />,
            loader: () => fetch("../data.json"),
          },
        ],
      },
      { path: "/statik", element: <Statik /> },
      {
        path: "/dash",
        element: <Dash />,
        children: [
          { path: "", element: <Munna /> },
          { path: "/dash/munna", element: <Munna /> },
          { path: "/dash/wish", element: <Wishlist /> },
        ],
      },
      { path: "/smart", element: <Smart /> },
      {
        path: "/details/:id",
        element: <Details />,
        loader: () => fetch("../data.json"),
      },
    ],
  },
  {
    path:"*",element:<Eror/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
