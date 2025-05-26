import { Outlet } from "react-router-dom";
import HeaderAdmin from "../Components/HeaderAdmin";
import SideBarAdmin from "../Components/SideBarAdmin";

const AdminLayout = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      <SideBarAdmin />
      <div className="w-full mx-4">
        <HeaderAdmin />
        <div className="border bg-white rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
