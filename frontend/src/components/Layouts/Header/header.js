import React from 'react';
import {
  Navbar
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <Navbar className="header-nav">
        <Navbar.Brand>
          <Link
            className="nav-link mt-1"
            to={{ pathname: '/home' }}
          >
            <h4>Web Accessibility Demo</h4>
          </Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
