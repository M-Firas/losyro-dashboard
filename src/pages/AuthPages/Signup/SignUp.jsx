import "./SignUp.css";
import { NavLink } from "react-router-dom";
//hooks
import { useState } from "react";
//assets
import backgroundImage from "../../../images/signUpBackground.png";
import logo from "../../../images/losyro-icon.svg";
//components
import PersonalInfo from "../../../components/PesrsonalInfo/PersonalInfo";
import WorkInfo from "../../../components/WorkInfo/WorkInfo";

const SignUp = () => {
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    backpoint: "",
    agancy: "",
    intrestedAgancy: "",
  });
  
  const [page, setPage] = useState(0);

  const formDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <WorkInfo formData={formData} setFormData={setFormData} />;
    }
  };


  return (
    <div className="signUp--page">

      <div className="signUp--left">
        <h3 className="losyro-title">
          <img src={logo} alt="" />
          LOSYRO
        </h3>
        <h2>Sign Up</h2>
        <div className="steps">
          <div className={`steps--dot ${page === 0 ? 'active' : ''}`} onClick={() => setPage(0)} />
          <div className={`steps--dot ${page === 1 ? 'active' : ''}`} onClick={() => setPage(1)}/>
        </div>
        {formDisplay()}
        <button
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
         {`${page === 1 ? 'Signup' : 'Next'}`}
        </button>

        <div className="login">
          <p>Already have an account?</p>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>

      <div className="signUp--right">
        <img src={backgroundImage} alt="" />
      </div>
      
    </div>
  );
};

export default SignUp;
