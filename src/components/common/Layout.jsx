import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    { children }
    <div className="section__footer">
      <span>© 2020, Designed & Developed by Ricardo Serin</span>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
