import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientLayout from "../Layouts/ClientLayout";
import HomePage from "../pages/clients/HomePage";
import Product from "../pages/clients/ProductPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../Layouts/AdminLayout";
import Dashboarh from "../pages/admins/Dashboarh";
import NotfoundPage from "../pages/NotfoundPage";
import ProductForm from "../pages/admins/ProductForm";

const router = createBrowserRouter([
  // Layout Client
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <Product /> },
    ],
  },

  // Layout Admin
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <Dashboarh /> },
      { path: "/admin/product-add", element: <ProductForm /> },
    ],
  },

  //   Layout Empty
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "*", element: <NotfoundPage /> },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
