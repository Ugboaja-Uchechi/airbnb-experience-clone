import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { SiAirbnb } from "react-icons/si";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header>
        <nav className="nav-flex">
          <div>
            <SiAirbnb className="logo" />
          </div>
          <div>
            <span>Become a host</span>
            <FaGlobe />
            <IoIosMenu />
            <FaUserCircle />
          </div>
        </nav>
      </header>
  </>
  )
}

export default Header;