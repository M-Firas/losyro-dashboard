import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import "./Dashboard.css"
import Navbar from "../components/Navbar/Navbar"

const Dashboard = () => {
  return (
    <div className="dashboard--container">
         <Sidebar />
         <div className="dashboard--content">
         <Navbar />
         <Outlet />
         </div>
    </div>
  )
}

export default Dashboard