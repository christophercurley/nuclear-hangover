import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="movies link">
          <Link to="/movies">
            <button>
              <h3>movies</h3>
            </button>
          </Link>
        </div>
        <div className="animes link">
          <Link to="/animes">
            <button>
              <h3>animes</h3>
            </button>
          </Link>
        </div>
        <div className="logo link">
          {/* <img
            src={logo}
            alt="bleeding edge science derived soft potions for your calcified pineal gland and babes that you have probably heard of before"
          /> */}
        </div>
        <div className="misc link">
          <Link to="/misc">
            <button>
              <h3>misc</h3>
            </button>
          </Link>
        </div>
        <div className="store link">
          <Link to="/store">
            <button>
              <h3>store</h3>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <ul>
        <Link to="/movies">
          <button>
            <li>movies</li>
          </button>
        </Link>
        <Link to="/animes">
          <button>
            <li>animes</li>
          </button>
        </Link>
        <Link to="/misc">
          <button>
            <li>misc</li>
          </button>
        </Link>
        <Link to="/store">
          <button>
            <li>store</li>
          </button>
        </Link>
      </ul> */
}
