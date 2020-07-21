import React from "react";
import { NavLink } from "react-router-dom";
import './NavTabs.css'


function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/portfolio" className="nav-link">
          Portfolio
        </NavLink>
      </li>
    </ul>
  );
}
export default NavTabs;
