import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  // settingnya di marih text loginya
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder="Your name" required />}

          <input type="email" placeholder=" Your email" required />
          <input type="password" placeholder="Password" required autoComplete="off" />
        </div>
        <button>{currState === "Sign up" ? "Create Account" : "login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to our Terms & Conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

// Add PropTypes validation
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
