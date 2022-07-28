import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
import { SiAirbnb } from "react-icons/si";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header>
        <nav className="nav-flex">
          <div className="logo-container">
            <SiAirbnb className="logo" />
            <span className="logo-span">airbnb</span>
          </div>
          <div>
            <span className="header-span">Become a Host</span>
            <FaGlobe className="icons" />
            <div className="icon-container">
              <IoIosMenu className="icons menu" />
              <FaUserCircle className="icons user" />
            </div>
          </div>
        </nav>
      </header>
  </>
  )
}

export default Header;