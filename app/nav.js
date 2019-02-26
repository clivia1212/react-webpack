import React from 'react';

import { NavLink } from 'react-router-dom';
import './nav.css';

const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink exact to="/" className="blue">A页面</NavLink> |&nbsp;
        <NavLink to="/b" activeClassName="active1">B页面</NavLink> |&nbsp;
        <NavLink to="/c/ILoveWeb">C页面</NavLink> |&nbsp;
        <NavLink to="/react" activeClassName="active1">404</NavLink> |&nbsp;
        <NavLink to="/redirect" activeClassName="active1">Redirect</NavLink>
      </div>
    </div>
  );
}

export default NavBar;