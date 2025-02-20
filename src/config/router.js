import React, { lazy, Suspense } from "react";

import App from "../App";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardOutlined, EditOutlined } from "@ant-design/icons";

const HomePage = lazy(() => import("../pages/HomePage"));
const FindFret = lazy(() => import("../pages/FindFret"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <div>错误</div>,
        children: [
          {
            index: true,
            title: "主页",
            icon: <DashboardOutlined />,
            element: <HomePage />,
          },

          {
            path: "fret",
            title: "找品位",
            icon: <EditOutlined />,
            element: <FindFret />,
          },
        ],
      },
    ],
  },
];

export { routes };

export default createBrowserRouter(routes);
