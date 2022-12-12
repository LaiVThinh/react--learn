import { createBrowserRouter, Route } from "react-router-dom";
import AlbumFeatures from "../features/Album/pages";
import Todofeatures from "../features/todo/pages";
import Home from "../pages/Home";
import Container from "../layouts/Container";
import Counter from "../features/Album/components/Counter";
import ColorBox from "../features/Album/components/ColorBox";
import ProductFeature from "../features/Products";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/album",
        element: <AlbumFeatures />,
      },
      {
        path: "/album/:id",
        element: <ColorBox />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "/todo",
        element: <Todofeatures />,
      },
      {
        path: "/products",
        element: <ProductFeature />,
      },
    ],
  },
]);

export { router };
