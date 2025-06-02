import Dashboard from "../pages/admin/Dashboard";
import ProductForm from "../pages/admin/ProductForm";
import ProductDetail from "../pages/admin/ProductDetail";
import DashboardPage from "../pages/admin/DashboardPage";
import SettingPage from "../pages/admin/SettingPage";
import ProductTablePage from "../pages/admin/ProductTablePage";
import ProductFormPage from "../pages/admin/ProductFormPage";
import CategoryPage from './../pages/client/CategoryPage';
import CategoryFormPage from "../pages/admin/CategoryFormPage";

const adminRoutes = [
  { path: "/admin", element: <Dashboard /> },
  { path: "/admin/add", element: <ProductForm /> },
  { path: "/admin/edit/:id", element: <ProductForm /> },
  { path: "/admin/detail/:id", element: <ProductDetail /> },


  // User profile page
  // { index: true, element: <DashboardPage /> },
	{ path: "/admin/settings", element: <SettingPage /> },
	{ path: "/admin/me/profile", element: <DashboardPage /> },

  // * Products routes
	{ path: "/admin/products", element: <ProductTablePage /> },
	{ path: "/admin/products/edit/:id", element: <ProductFormPage /> },
	{ path: "/admin/products/add", element: <ProductFormPage /> },

  // * Categories routes
	{ path: "/admin/categories", element: <CategoryPage /> },
	{ path: "/admin/categories/edit/:id", element: <CategoryFormPage /> },
	{ path: "/admin/categories/add", element: <CategoryFormPage /> },

  // * Orders routes
	{ path: "/admin/orders", element: <ProductTablePage /> },
	{ path: "/admin/orders/edit/:id", element: <ProductFormPage /> },
	{ path: "/admin/orders/add", element: <ProductFormPage /> },

  // * Users routes
	{ path: "/admin/users", element: <ProductTablePage /> },
	{ path: "/admin/users/edit/:id", element: <ProductFormPage /> },
	{ path: "/admin/users/add", element: <ProductFormPage /> },

  // * Blog routes
	{ path: "/admin/blogs", element: <ProductTablePage /> },
	{ path: "/admin/blogs/edit/:id", element: <ProductFormPage /> },
	{ path: "/admin/blogs/add", element: <ProductFormPage /> },
];
export default adminRoutes;
