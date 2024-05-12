import "./LoginPage.css"
import { useState } from 'react';
//assets
import backgroundImage from '../../images/Group 1000001645.png'
import logo from '../../images/losyro-icon.svg'
//components
import Login from '../../components/Login/Login'
import RecoverPassword from "../../components/RecoverPassword/RecoverPassword"



const LoginPage = () => {

  const [loginSection, setLoginSection] = useState('login');

const showLoginComponent = () => {
  setLoginSection('login');
};

const showRecoverPasswordComponent = () => {
  setLoginSection('forgotPassword');
};

    return (
        <div className="login--page">
        <div className="login--left">
        <img src={backgroundImage} alt="" />
        </div>
        <div className="login--right">
        <h3 className="title"><img src={logo} alt=""/>LOSYRO</h3>
        {/* <Login /> */}
        <RecoverPassword />
        </div>
        </div>
      );
}
 
export default LoginPage;
