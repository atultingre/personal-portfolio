import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
const Navbar = ({ toggleTheme }) => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link active" to="/">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link " to="/resume">
              Resume
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link " to="/portfolio">
              Portfolio
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link className="navbar-link " to="/blog">
              Blog
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link className="navbar-link " to="/contact">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <button className="navbar-link " onClick={toggleTheme}><BsFillMoonFill/></button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
