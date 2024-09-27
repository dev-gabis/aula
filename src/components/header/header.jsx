import React from 'react';
import { Link } from 'react-router-dom';
import css from './header.module.css';

const Header = () => {
  return (
    <header>
      <nav className="menu">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
