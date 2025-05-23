import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="max-w-6xl px-4 py-4 mx-auto">
          <ul className="flex items-center gap-6 font-medium text-gray-700">
            <li>
              <Link to="/admin" className="transition hover:text-blue-600">
                Dashboarh
              </Link>
            </li>
            <li>
              <Link to="/admin/product-add" className="transition hover:text-blue-600">
                Product-Add
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderAdmin;
