import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const NoosaButton = ({children,...props}) => {
    const shopButton = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        width: '160px',
        height: '56px',
        color: '#F5F3F2',
    };
    
      return (
      <Button style={shopButton}>{children}</Button>
      )

};


export default NoosaButton;