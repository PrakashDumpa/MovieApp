import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import "./index.css";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="layout_container">
      <NavBar />
      <div className="outlet_container pt-4 pb-5 min-h-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
