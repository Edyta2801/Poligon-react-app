/* eslint-disable linebreak-style */
import React from 'react';

import Logo from './Logo';
import NavLink from './NavLink';
import Menu from './Menu';

function Header() {
  return (
    <div>
      <Logo/>
      <Menu>
          <NavLink to='/' label='Link-1' />
          <NavLink to='/' label='Link-2' />
          <NavLink to='/' label='Link-3' />
      </Menu>
    </div>
  );
}

export default Header;