import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navs.css";
import logo from "../images/wallpaperflare.com_wallpaper.jpg";

function Navs() {
  return (
    <nav className="navbar-expand-lg d-flex justify-content-around  text-white">
      <div className="logo">
        <img src={logo} alt="logo" />

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto text-white flex-sm-row flex-md-row">
          <li className="nav-item active">
            <NavLink className="nav-link text-white" to="/home" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/food" className="nav-link text-white">
              Food
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/drink" className="nav-link text-white">
              Drinks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/reserveSeats" className="nav-link text-white">
              reserveSeats
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="form">
        <form class="form-inline-block my-2 my-lg-0">
          <button className="btn btn-dark mx-3">
            <NavLink className="text-danger" to="/">
              Logout
            </NavLink>
          </button>
        
        </form>
      </div>
    </nav>
  );
}

export default Navs;
