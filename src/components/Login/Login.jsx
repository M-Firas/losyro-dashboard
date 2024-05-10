import "../Login/Login.css";

const Login = () => {
  return (
    <div className="login--conatiner">
      <form>
        <h2>Login</h2>
        <input type="text" placeholder="Email Address"></input>
        <input type="password" placeholder="Password"></input>

        <div className="login--options">
          <div className="remember-me">
            <input className="checkbox" type="checkbox" id="remember-me" />
            <label for="remember-me">Remember Me</label>
          </div>
          <a href="">Forgot Password</a>
        </div>

        <button>Log In</button>

        <div className="signup">
          <p>Don’t have an account yet?</p>
          <a href="">Create account</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
