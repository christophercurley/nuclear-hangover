import React from "react";
import "./Hero.css";
import hero from "../assets/hero.jpg";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <div>
      <img className="hero" src={hero} />
      <img className="logo" src={logo} />
    </div>
  );
}

export default Hero;
