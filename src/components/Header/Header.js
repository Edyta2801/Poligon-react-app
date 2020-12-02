/* eslint-disable linebreak-style */
import React from 'react';

import {
  Link
} from 'react-router-dom';


import Logo from './Logo';
// import NavLink from './NavLink';
import Menu from './Menu';

function Header() {
  return (
    <div>
      <Logo />
      <Menu>
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li><Link to='/articles'>Articles</Link></li>
          <li><Link to='/form'>Form</Link>
          </li>
        </ul>
      </Menu>
    </div>
  );
}

export default Header;