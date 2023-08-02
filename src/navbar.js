import React from 'react';

const Navbar = () => {
  return (
    <div id="navigation">
      <nav>
        <h1 className="logo">GOTRAVEL</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Beaches</a>
          </li>
          <li>
            <a href="#">Ranches</a>
          </li>
          <li>
            <a href="#">Parks</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
