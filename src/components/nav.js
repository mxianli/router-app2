import React from "react";
import "../App.css";
 
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="Nav">
      <h1>LOGO</h1>
      <ul className="Nav-line">
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/shop' >
          <li>Shop</li>
        </Link>
        <Link to='/detail' >
          <li>Detail</li>
        </Link>
         
      </ul>
    </nav>
  );
}

export default Nav;
