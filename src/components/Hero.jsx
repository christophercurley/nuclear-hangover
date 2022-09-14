import React, { useState, useEffect } from "react";
import "./Hero.css";
import hero from "../assets/hero.jpg";
import logo from "../assets/logo.png";

function Hero() {
  // const [sWidth, setSWidth] = useState(null)

  // useEffect(() => {
  //   let
  // }, [])

  return (
    <>
      <img className="hero" src={hero} />
      {/* <img className="logo" src={logo} /> */}
    </>
  );
}

export default Hero;
