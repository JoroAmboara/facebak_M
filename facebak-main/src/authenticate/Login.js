import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post("/api/login", { email, password })
      .then((response) => {
        console.log("Login successful:", response.data);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/detail/0-4519_facebook-logo-png-2018-facebook-logo-png.png"
        alt="Facebook Logo Png - 2018 Facebook Logo Png@pngkey.com"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
