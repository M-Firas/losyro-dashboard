import './ResetPassword.css'
import { useNavigate } from 'react-router-dom';
//assets
import backgroundImage from "../../../images/Group 1000001645.png";
import logo from "../../../images/losyro-icon.svg";


 const ResetPassword = () => {

    const navigate = useNavigate();
    const directToLogin = () => {
     navigate('/login');
    }

  return (
    <div className="login--page">

    <div className="login--left">
    <img src={backgroundImage} alt="" />
    </div>

    <div className="login--right">
    <h3 className="losyro-title"><img src={logo} alt=""/>LOSYRO</h3>
    <div className='resetPassword--container'>
        <form>
            <h2>Reset Password</h2>
            <p>Enter your New Password to access your account</p>
            <input type="password" placeholder="New Password"></input>
            <input type="password" placeholder="Confirm New Password"></input>
            <button onClick={directToLogin}>Reset Password</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default ResetPassword;