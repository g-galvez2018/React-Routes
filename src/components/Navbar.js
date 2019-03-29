// components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <NavLink
            exact
            activeStyle={{ fontWeight: 'bold', color: 'red' }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ fontWeight: 'bold', color: 'red' }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ fontWeight: 'bold', color: 'red' }}
            to="/projects"
            style={{ textDecoration: 'none' }}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

