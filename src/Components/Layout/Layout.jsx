import { Outlet, useNavigate } from "react-router-dom";
import "./layout.scss";

const Layout = () => {
  const navigate = useNavigate();

  const bannerClickhandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="layout-container">
      <div className="banner-text" onClick={bannerClickhandler}>
        DIGITAL IDENTITY MANAGEMENT SYSTEM
      </div>
      <div className="children-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
