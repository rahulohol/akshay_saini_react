import React from 'react'
import WebLogo from './WebLogo';

const Header = () => {
    return (
      <div className="header">
        <WebLogo />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;