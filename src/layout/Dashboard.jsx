import "./Dashboard.css";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Drawer from "../components/Drawer/Drawer";
import { TodosContext } from "../utils/TodosContext";

const Dashboard = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { addTodo } = useContext(TodosContext);

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
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={closeDrawer}
        addTodo={addTodo}
      />
    </div>
  );
};

export default Dashboard;

