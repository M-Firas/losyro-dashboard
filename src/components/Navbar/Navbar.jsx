import "./Navbar.css";
import { useLocation } from "react-router-dom";
//assets
import avatar from "../../images/avatar.png";
//components
import Notifications from "../Notifications/Notifications";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      {/* Home Page Navbar */}
      {location.pathname === "/dashboard/home" && (
        <div className="home-navbar--container">
          <img src={avatar} alt="" width="50px" height="50px" />
        </div>
      )}

      {/* Current Setter Page Navbar */}
      {location.pathname === "/dashboard/home/current-setter" && (
        <div className="navbar--container">
          <div className="container--left">
            <img src="/icons/trophy.svg" alt="" />
            <p>Current Setter</p>
            <span>( Actual Work )</span>
          </div>
          <div className="container--right">
            <button>This Setter</button>
            <div className="setter--selection">
              <img src="/icons/arrowLeft.svg" alt="" />
              <div className="setter--info">
                <p>Setter 22</p>
                <span>12Apr-17Apr</span>
              </div>
              <img src="/icons/arrowRight.svg" alt="" />
            </div>
            <img src={avatar} alt="" width="50px" height="50px" />
            <Notifications />
          </div>
        </div>
      )}

      {/* Setters Page Navbar */}
      {location.pathname === "/dashboard/setters" && (
        <div className="navbar--container">
          <div className="container--left">
            <img src="/icons/team3.svg" alt="" />
            <p>Setters</p>
            <div className="operations--buttons">
              {" "}
              <img src="/icons/refreash.svg" alt="" />
            </div>
          </div>
          <div className="container--right">
            <button>This Setter</button>

            <div className="setter--selection">
              <img src="/icons/arrowLeft.svg" alt="" />
              <div className="setter--info">
                <p>Setter 22</p>
                <span>12Apr-17Apr</span>
              </div>
              <img src="/icons/arrowRight.svg" alt="" />
            </div>
            <img src={avatar} alt="" width="50px" height="50px" />
            <Notifications />
          </div>
        </div>
      )}

      {/* Team Page Navbar */}
      {location.pathname === "/dashboard/team" && (
        <div className="navbar--container">
          <div className="container--left">
            <img src="/icons/team3.svg" alt="" />
            <p>Team Mates</p>
            <div className="operations--buttons">
              {" "}
              <img src="/icons/refreash.svg" alt="" />
            </div>
          </div>
          <div className="container--right">
            <button>This Setter</button>

            <div className="setter--selection">
              <img src="/icons/arrowLeft.svg" alt="" />
              <div className="setter--info">
                <p>Setter 22</p>
                <span>12Apr-17Apr</span>
              </div>
              <img src="/icons/arrowRight.svg" alt="" />
            </div>
            <img src={avatar} alt="" width="50px" height="50px" />
            <Notifications />
          </div>
        </div>
      )}

      {/* Profile Page Navbar */}
      {location.pathname === "/dashboard/profile" && (
        <div className="navbar--container">
          <div className="container--left">
            <img src="/icons/team3.svg" alt="" />
            <p>Profile</p>
            <div className="operations--buttons">
              {" "}
              <img src="/icons/refreash.svg" alt="" />
            </div>
          </div>
          <div className="container--right">
            <img src={avatar} alt="" width="50px" height="50px" />
            <Notifications />
          </div>
        </div>
      )}

      {/* About Us Page Navbar */}
      {location.pathname === "/dashboard/aboutus" && (
        <div className="navbar--container">
          <div className="container--left">
            <img src="/icons/team3.svg" alt="" />
            <p>About Us</p>
            <div className="operations--buttons">
              {" "}
              <img src="/icons/refreash.svg" alt="" />
            </div>
          </div>
          <div className="container--right">
            <img src={avatar} alt="" width="50px" height="50px" />
            <Notifications />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
