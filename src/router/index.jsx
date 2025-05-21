import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import DashBoardPage from "../pages/admin/DashBoardPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <DashBoardPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
