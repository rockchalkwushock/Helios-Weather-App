import React from 'react';
import Header from './Header';
import Footer from './Footer';

/*
  Home, About, & Page404 will be injected as children
  on route changes pertaining to the dynamic routing via react-router
  and webpack 2.
*/

export default ({ children }) => (
  <div className="application">
    <Header />
      {children}
    <Footer />
  </div>
);
