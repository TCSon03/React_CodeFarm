import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
