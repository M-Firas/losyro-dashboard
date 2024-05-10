import "./LoginPage.css"
import backgroundImage from '../../images/Group 1000001645.png'
import logo from '../../images/losyro-icon.svg'
import Login from '../../components/Login/Login'


const LoginPage = () => {
    return (
        <div className="login--page">
        <div className="login--left">
        <img src={backgroundImage} alt="" />
        </div>
        <div className="login--right">
        <h3 className="title"><img src={logo} alt=""/>LOSYRO</h3>
        <Login />
        </div>
        </div>
      );
}
 
export default LoginPage;
