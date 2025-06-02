import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutAdmin from "../layouts/LayoutAdmin";

import LayoutClient from "../layouts/LayoutClient";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    children: clientRoutes,
  },
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <LayoutAdmin />,
        children: adminRoutes,
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <div>404 Not Found</div> },
]);

export default function Routes() {
  return <RouterProvider router={routes} />;
}
