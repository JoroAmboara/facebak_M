import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password === passwordConfirm) {
      try {
        const response = await axios.post("http://localhost:8080/api/signup", { email, password, username });
        console.log("Signup successful:", response.data);
      } catch (error) {
        console.error("Signup error:", error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="signup">
      <h1>Welcome to facebak</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <input
        onChange={(e) => setPasswordConfirm(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirm}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;
