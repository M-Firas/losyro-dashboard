import "./Dashboard.css";

//react hookss
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

//components
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Drawer from "../components/Drawer/Drawer";

const Dashboard = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Update drawer state when location changes
  useEffect(() => {
    setIsDrawerOpen(location.pathname.includes('current-setter'));
  }, [location]);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="dashboard--container">
      <Sidebar />
      <div className="dashboard--content">
        <Navbar />
        <Outlet context={{ openDrawer }} />
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
};

export default Dashboard;

