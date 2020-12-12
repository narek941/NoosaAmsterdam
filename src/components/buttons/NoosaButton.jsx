import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const NoosaButton = ({children, type,...props}) => {
    const shopButton = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        color: '#F5F3F2',
        width: '160px',
        height:'56px',
    };
    const shopButtonSmall = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        color: '#F5F3F2',
        width: '116px',
        height: '36px',
    };
    switch (type) {
        case 'product':
            return (
                <Button style={shopButtonSmall}>{children}</Button>
                )
        default:
          return (
                <Button style={shopButton}>{children}</Button>
                )
      }
      

};


export default NoosaButton;