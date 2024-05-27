import React from "react";
import logo from "../images/wallpaperflare.com_wallpaper.jpg";
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer  flex-md-row gap-4">
      <div className="imageFooter">
        <img src={logo} alt="logo" />
      </div>
      <div className="list mr-auto text-dark flex-sm-row flex-md-row">
      <h2 class='alf'>Services</h2>
        <ul>
        <li className="nav-item">
            <NavLink to="/home/food" className="nav-link text-white">
              Foods section
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/drink" className="nav-link text-white">
              Drinks section
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/reserveSeats" className="nav-link text-white">
              Movies section
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}

export default Footer;
