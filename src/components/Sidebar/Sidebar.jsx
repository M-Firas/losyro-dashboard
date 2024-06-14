import "./Sidebar.css";
import { NavLink,useNavigate } from "react-router-dom";
//assets
import logo from "../../images/losyro-icon.svg";
import avatar from "../../images/avatar.png";
//auth
import { useAuth } from '../../utils/auth'




const Sidebar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout()
    navigate('/login');
  }

  const navLinks = [
    { path: "home", label: "Home", icon:'/icons/home.svg' },
    { path: "setters", label: "Setters", icon:'/icons/setters.svg' },
    { path: "team", label: "Team", icon:'/icons/team.svg' },
    { path: "profile", label: "Profile", icon:'/icons/profile.svg' },
    { path: "aboutus", label: "About Us", icon:'/icons/losyro.svg' },
    { path: "settings", label: "Settings", icon:'/icons/settings.svg' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar--container">
        <div className="sidebar--top">
          <div className="title">
            <img src={logo} alt="" />
            LOSYRO
          </div>
          {navLinks.map((link, index) => (
        <div key={index} className="link-container">
          <NavLink
            to={link.path}
            className="link"
            activeClassName="active"
          >
            <img src={link.icon} alt="" /> {link.label}
          </NavLink>
        </div>
      ))}
        </div>

        <div className="sidebar--bottom">
          <button className="ask--me"><img src='/icons/qmark.svg' alt="" /><p>Ask A Question</p></button>
          <div className="user--info">
            <div className="user--top">
                <img src={avatar} alt="" />
                <div className="info">
                  <span>Product Designer</span>
                  <p>Maya AB</p>
                </div>
            </div> 
            <div className="user--bottom">
                <button onClick={handleLogout}><img src="/icons/logout.svg" alt="" />Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
