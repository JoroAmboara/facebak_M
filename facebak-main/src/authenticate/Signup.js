import React, { useState } from "react";
import axios from "axios"; // Importez Axios pour effectuer des appels API
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    
    if (password === passwordConfirm) {
      // Utilisez Axios pour envoyer les données d'inscription au backend
      axios.post("/api/signup", { email, password, username })
        .then((response) => {
          // Traitez la réponse du backend en conséquence
          console.log("Signup successful:", response.data);
        })
        .catch((error) => {
          // Gérez les erreurs d'inscription
          console.error("Signup error:", error);
        });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="signup">
      <h1>Welcome you to facebak</h1>
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
