import React, { useState } from "react";
import "./Authenticate.css";
import Login from "./Login";
import Signup from "./Signup";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authenticate">
      <div className="auth__left">
      <img src="https://www.pngkey.com/png/detail/0-5082_computer-icons-facebook-like-button-clip-art-facebook.png" 
      alt="Computer Icons Facebook Like Button Clip Art - Facebook Logo Transparent Black And White@pngkey.com"/>
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Already Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
