import './VerificationCode.css'
import { useState, useRef } from "react";
//assets
import backgroundImage from "../../../images/Group 1000001645.png";
import logo from "../../../images/losyro-icon.svg";
import { useNavigate } from 'react-router-dom';

 const VerificationCode = () => {

    const [OTPinput, setOTPinput] = useState(["", "", "", ""]);

    const inputRefs = useRef([]);
  
    const handleChange = (index, value) => {
      const newInputs = [...OTPinput];
      newInputs[index] = value;
  
      setOTPinput(newInputs);
  
      // If there's a value and it's not the last input, focus on the next input field
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };

    const navigate = useNavigate();
    const directToResetPassword = () => {
     navigate('/reset-password');
    }


  return (
    <div className="login--page">

    <div className="login--left">
    <img src={backgroundImage} alt="" />
    </div>

    <div className="login--right">
    <h3 className="losyro-title"><img src={logo} alt=""/>LOSYRO</h3>
    <div className="verificationCode--container">
      <form>
        <h2>Enter Verification Code</h2>
        <p>We have just sent a verification code to jonathanadah11@gmail.com</p>
        <div className="otp--inputs">
          {OTPinput.map((value, index) => (
            <input
              key={index}
              maxLength="1"
              type="text"
              ref={(ref) => (inputRefs.current[index] = ref)}
              value={value}
              onKeyDown={(e) => {
                // Allow only numeric keys (0-9) and backspace
                if (!(e.key === "Backspace" || /[0-9]/.test(e.key))) {
                  e.preventDefault();
                }
              }}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>

        <button className="verify" onClick={directToResetPassword} >Verify</button>
        <button className="resend">Resend Code</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default VerificationCode;