import React from "react";
import "./Hero.css";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <>
      <img
        className="hero"
        src={hero}
        alt="bleeding edge science derived soft potions for your calcified pineal gland and babes that you have probably heard of before"
      />
    </>
  );
}

export default Hero;
