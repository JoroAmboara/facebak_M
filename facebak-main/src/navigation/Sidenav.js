import React from "react";
import "./Sidenav.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"; // Importez Axios pour effectuer des appels API
import { logoutUser } from "../features/userSlice";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Utilisez Axios pour envoyer la demande de déconnexion au backend
    axios.post("/api/logout")
      .then((response) => {
        dispatch(logoutUser());
        console.log("Logout successful:", response.data);
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="sidenav">
      {/* ... */}
      <div className="sidenav__buttons">
        {/* ... */}
        <button className="sidenav__button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
            <button onClick={handleLogout} className="logout__button">
              Logout
            </button>
          </span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
