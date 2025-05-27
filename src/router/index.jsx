import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Dashboard from "../pages/admin/Dashboard";
import ProductForm from "../pages/admin/ProductForm";
import ProductDetail from "../pages/admin/ProductDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/add", element: <ProductForm /> },
      { path: "/edit/:id", element: <ProductForm /> },
      { path: "/detail/:id", element: <ProductDetail /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={routes} />;
}
