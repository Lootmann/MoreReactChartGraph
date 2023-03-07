import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import VictoryIndex from "./VictoryChart";
import "./index.css";
import VisIndex from "./Vis";
import NivoIndex from "./Nivo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/victory", element: <VictoryIndex /> },
      { path: "/vis", element: <VisIndex /> },
      { path: "/nivo", element: <NivoIndex /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
