import { Outlet } from "react-router-dom";
import HeaderAdmin from "../Components/HeaderAdmin";
// import FooterAdmin from "../Components/FooterAdmin";

const AdminLayout = () => {
  return (
    <div>
      <HeaderAdmin />
      <main>
        <Outlet />
      </main>
      {/* <FooterAdmin /> */}
    </div>
  );
};

export default AdminLayout;
