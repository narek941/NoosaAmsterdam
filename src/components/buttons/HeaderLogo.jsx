import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom';
import noosaLogo from '../../img/noosaLogo.png';
import { Button } from '@material-ui/core';

const HeaderLogo = ({ type, to, children, ...props }) => {
  const logo = {
    background: 'transparent 0% 0% no-repeat padding-box',
    opacity: 1,
    backgroundImage: `url(${noosaLogo})`,
    width: '165px',
    height: '57px',
    paddingRight: '305px'
  };
  const mystyle = {
    background: 'transparent 0% 0% no-repeat padding-box',
    opacity: 1,
    backgroundImage: `url(${noosaLogo})`,
    width: '165px',
    height: '57px',
  };
  switch (type) {
    case 'header':
      return (
        <Button style={logo} component={RouterNavLink} to={to} />
      )
    default:
      return (
        <Button style={mystyle} >
          {children}
        </Button>
      )
  }
};

export default HeaderLogo;