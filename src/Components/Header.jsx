import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl px-4 py-4 mx-auto">
        <ul className="flex items-center gap-6 font-medium text-gray-700">
          <li>
            <Link to="/" className="transition hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/product" className="transition hover:text-blue-600">Product</Link>
          </li>
          <li>
            <Link to="/admin" className="transition hover:text-blue-600">Admin</Link>
          </li>
          <li>
            <Link to="/auth/login" className="transition hover:text-blue-600">Login</Link>
          </li>
          <li>
            <Link to="/auth/register" className="transition hover:text-blue-600">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
