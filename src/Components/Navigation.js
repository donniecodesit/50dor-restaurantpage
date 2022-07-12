import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import "../Styles/Navigation.css";
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Navigation() {
  const [linksVisible, setLinksVisible] = useState(false);
  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
  }

  return (
    <div className="navigation">
      <div className="leftSide" id={linksVisible ? "open" : "close"}>
        <img className="website-logo" src={logo} alt="website logo" />
        <div className="mobileLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleLinks}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
