import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import DashBoardPage from "../pages/admin/DashBoardPage";
import ClientLayout from "../Layouts/ClientLayout";
import NotFoundPage from "./../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <DashBoardPage /> },
    ],
  },

  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
