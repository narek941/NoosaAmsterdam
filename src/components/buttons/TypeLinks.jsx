import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const TypeLinks = ({ type, to, children, ...props }) => {
  const mystyle = {
    opacity: 1,
    textTransform: 'capitalize',
    margin: '31px 27px 31px 0px',
    color: '#F5F3F2',
  }


  switch (type) {
    case 'navigation':
      return (
        <Button style={mystyle} component={RouterNavLink} to={to}  >
          {children}
        </Button>
      )

    default:
      return (
        <Button style={mystyle} color="inherit">
          {children}
        </Button>
      )
  }
};

export default TypeLinks;