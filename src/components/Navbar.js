import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="title">Brochill</div>
      <div className="profile-icon">
        <AccountCircleIcon color="primary" />
      </div>
    </div>
  );
};

export default Navbar;
