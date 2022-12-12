import { createBrowserRouter } from "react-router-dom";
import AlbumFeatures from "../features/Album/pages";
import Todofeatures from "../features/todo/pages";
import Home from "../pages/Home";
import Container from "../layouts/Container";
import Counter from "../features/Album/components/Counter";
import ColorBox from "../features/Album/components/ColorBox";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/album",
    element: <AlbumFeatures />,
  },
  {
    path: "/album/:id",
    element: <ColorBox />,
  },
  
  {
    path: "/container",
    element: <Container />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
    ],
  },
  {
    path: "/todo",
    element: <Todofeatures />,
  },
]);

export { router };
