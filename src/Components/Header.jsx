import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-slate-900">
        <div className="container py-2 flex justify-between items-center">
          <select
            name=""
            id=""
            className="flex font-medium text-white rounded-md space-x-2 border- bg-slate-900 items-center hover:text-yellow-100"
          >
            <option value="">VNĐ</option>
            <option value="">USD</option>
          </select>
          <div className="flex text-white gap-4">
            <a href="" className="font-medium hover:text-gray-400">
              Sign in
            </a>
            <a href="" className="font-medium hover:text-gray-400">
              Create an account
            </a>
          </div>
        </div>
      </div>
      <header className="container flex justify-between border-b py-4">
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="logo">
          <Link to="/" className="flex">
            <p>ST</p>
            <p>Everest</p>
            <p>.</p>
          </Link>
        </div>
        <div>
          <button>
            <i className="ri-search-line"></i>
          </button>
          <button>
            <i className="ri-user-line" />
          </button>
          <button>
            <i className="ri-shopping-cart-2-line" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
