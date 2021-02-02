import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink as RouterNavLink } from 'react-router-dom';

const TypeLinks = ({ type, to, children, ...props }) => {
  const mystyle = {
    opacity: 1,
    textTransform: 'capitalize',
    margin: '0px 27px 0px 0px',
    color: '#F5F3F2',
    justifyContent: 'flex-start',
  }
  const mystyleBig = {
    opacity: 1,
    textTransform: 'capitalize',
    margin: '0px 27px 0px 0px',
    color: '#F5F3F2',
    justifyContent: 'flex-start',
    fontSize: '24px',
  }


  switch (type) {
    case 'navigation':
      return (
        <Button style={mystyle} component={RouterNavLink} to={to}  >
          {children}
        </Button>
      )
      case 'navigationBig':
        return (
          <Button style={mystyleBig} component={RouterNavLink} to={to}  >
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