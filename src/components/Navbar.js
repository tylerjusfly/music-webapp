import React from 'react';
import '../assets/scss/navbar.scss';

function NavBar() {
  return (
    <nav className="Navbar">
      <h1 className="Nav-Logo">
        <span>X</span>arm!
      </h1>
      <ul className="Nav-List">
        <li>Add Songs</li>
        <li>Explore</li>
      </ul>
    </nav>
  );
}

export default NavBar;
