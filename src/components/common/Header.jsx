import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const bug = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="header-container">
      <NavLink onClick={bug} exact className="header__nav-link" activeClassName="header__nav-link--active" to="/">Home</NavLink>
      <Link exact className="header__nav-link" activeClassName="header__nav-link--active" to={{ pathname: '/', hash: 'about', scroll: { behavior: 'smooth', block: 'end' } }}>About</Link>
      <Link exact className="header__nav-link" activeClassName="header__nav-link--active" to={{ pathname: '/', hash: 'skills' }}>Skills</Link>
      <Link exact className="header__nav-link" activeClassName="header__nav-link--active" to={{ pathname: '/', hash: 'contact' }}>Contact</Link>
      <NavLink onClick={bug} exact className="header__nav-link" activeClassName="header__nav-link--active" to="about-me">About me</NavLink>
    </nav>
  );
};

export default Header;
