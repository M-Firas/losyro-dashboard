import "./RecoverPassword.css";
import { NavLink, useNavigate } from 'react-router-dom';
//assets
import backgroundImage from "../../../images/Group 1000001645.png";
import logo from "../../../images/losyro-icon.svg";
import arrow from '../../../images/arrow.svg'
//components


const RecoverPasswordPage = () => {
  
   const navigate = useNavigate();
   const directToOtp = () => {
    navigate('/verification-code');
   }


  return (
    <div className="login--page">
      <div className="login--left">
        <img src={backgroundImage} alt="" />
      </div>


      
      <div className="login--right">
        <h3 className="losyro-title">
          <img src={logo} alt="" />
          LOSYRO
        </h3>
        <div className="recoverPassword--container">
          <form>
            <h2>Recover your Password</h2>
            <p>
              <span>Enter the email</span> that you used when register to
              recover your password. You will receive a{" "}
              <span>password reset link.</span>
            </p>
            <input type="email" placeholder="Email Address" required></input>

            <button className="send" onClick={directToOtp}>Send Link</button>

            <NavLink to="/login">
              <button className="back">
                <img src={arrow} alt="" /> Back to Login
              </button>
            </NavLink>

            <p className="if">If you need further assistance</p>
            <p className="contact">Contact our support team</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPasswordPage;
