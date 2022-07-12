import React from 'react';
import banner from "../Assets/foodbanner.jpg";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

export default function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${banner})`}}>
        <div className="headerContainer">
            <h1>The Corners Of Umbrian</h1>
            <p>Italian Cuisine, one click away!</p>
            <p>Cuisine italienne, est à un clic!</p>
            <Link to="/menu">
                <button>Order Now!</button>
            </Link>
        </div>
    </div>
  )
}