import AboutPage from "../pages/client/AboutPage";
import BlogDetailPage from "../pages/client/BlogDetailPage";
import BlogPage from "../pages/client/BlogPage";
import CartPage from "../pages/client/CartPage";
import CheckoutPage from "../pages/client/CheckoutPage";
import CheckoutSuccessPage from "../pages/client/CheckoutSuccessPage";
import ContactPage from "../pages/client/ContactPage";
import FAQPage from "../pages/client/FAQPage";
import HomePage from "../pages/client/HomePage";
import OrderPage from "../pages/client/OrderPage";
import PrivacyPage from "../pages/client/PrivacyPage";
import ProductDetailPage from "../pages/client/ProductDetailPage";
import ProductsPage from "../pages/client/ProductDetailPage";
import CategoriesPage from "../pages/client/ProductDetailPage";
import ProfilePage from "../pages/client/ProfilePage";
import TermsPage from "../pages/client/TermsPage";
import WishListProductPage from "../pages/client/WishListProductPage";

const clientRoutes = [
  // Common client routes
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/terms", element: <TermsPage /> },
  { path: "/privacy", element: <PrivacyPage /> },

  // products & categories
  { path: "/products", element: <ProductsPage /> },
  { path: "/products/:id", element: <ProductDetailPage /> },
  { path: "/categories", element: <CategoriesPage /> },

  // cart & checkout
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/checkout-success", element: <CheckoutSuccessPage /> },

  // Blog
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:slug", element: <BlogDetailPage /> },

  // user
	{ path: "/me/profile", element: <ProfilePage /> },
	{ path: "/me/orders", element: <OrderPage /> },
	{ path: "/me/wishlist", element: <WishListProductPage /> },
];

export default clientRoutes;
