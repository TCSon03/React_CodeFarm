import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Dashboard from "../pages/admin/Dashboard";
import ProductForm from "../pages/admin/ProductForm";
import ProductDetail from "../pages/admin/ProductDetail";
import LayoutClient from "../layouts/LayoutClient";
import HomePage from "../pages/client/HomePage";
import ShopPage from "../pages/client/ShopPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
    ],
  },
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
          { path: "/admin", element: <Dashboard /> },
          { path: "/admin/add", element: <ProductForm /> },
          { path: "/admin/edit/:id", element: <ProductForm /> },
          { path: "/admin/detail/:id", element: <ProductDetail /> },
        ],
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
