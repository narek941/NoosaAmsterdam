import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import noosaLogo from '../../img/noosaLogo.png';

const CourseButton = ({ type, to, children, ...props }) => {
  const mystyle = {
    textAlign: 'center',
    font: 'normal normal bold 16px / 19px Roboto',
    letterSpacing: '0px',
    color: '#F5F3F2',
    opacity: 1,
    textTransform: 'capitalize',
    margin: '15px',
  }
  const logo = {
    background: 'transparent 0% 0% no-repeat padding-box',
    opacity: 1,
    backgroundImage: `url(${noosaLogo})`,
    width: '165px',
    height: '57px',
    left: '280px',
    margin: '11px 305.33px 12px 0px',

  };

  switch (type) {
    case 'navigation':
      return (
        <Button style={mystyle} component={RouterNavLink} to={to}  >
          {children}
        </Button>
      )
    case 'logo':
      return (
        <Button style={logo} component={RouterNavLink} to={to} />
      )
    default:
      return (
        <Button style={mystyle} color="inherit">
          {children}
        </Button>
      )
  }
};

export default CourseButton;