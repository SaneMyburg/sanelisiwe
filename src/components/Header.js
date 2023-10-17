import React from 'react';
import { HamburgerIcon } from '../icons';

function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="logo">
          <h1>S</h1>
        </div>
        <div className="name">Sane Myburg</div>
      </div>
      <div className="header-right">
        <div className="menu-icon">
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
