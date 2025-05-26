import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <div className="w-60 bg-slate-800 px-3 text-white">
      <ul>
        <Link to="" className="flex text-white">
          <p>ST</p>
          <p>Everest</p>
          <p>.</p>
        </Link>
        <li>
          <Link to="/admin">
            <i className="ri-home-8-line"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link to="/admin/product-add">Product Form</Link>
        </li>
        <li>
          <Link to="/admin/product">Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarAdmin;
