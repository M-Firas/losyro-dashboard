import "./Login.css";
//hooks
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "../../../utils/auth";
//assets
import backgroundImage from "../../../images/Group 1000001645.png";
import logo from "../../../images/losyro-icon.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "firasdev74@gmail.com" && password === "123456789xc") {
      login({ email });
      navigate('/dashboard/home')
    } else {
      alert("Invalid email or password");
    }
  };

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
        <div className="login--conatiner">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <div className="login--options">
              <div className="remember-me">
                <input className="checkbox" type="checkbox" id="remember-me" />
                <label for="remember-me">Remember Me</label>
              </div>
              <NavLink to="/recover-password">Forgot Password</NavLink>
            </div>

            <button>Log In</button>

            <div className="signup">
              <p>Don’t have an account yet?</p>
              <NavLink to="/sign-up">Create account</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
