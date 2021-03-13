import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NoosaButton = ({ to, children, type, fontSize ='16px',...props }) => {

    const noosaButton = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: props.borderRadius,
        opacity: 1,
        color: '#F5F3F2',
        width: props.width,
        height: props.height,
        fontSize: fontSize,
    };

    switch (type) {
        case 'popup':
            return (
                <Button component={RouterNavLink} to={to} style={noosaButton}>{children}</Button>
            )
        case 'register':
            return (
                <Button type="submit" variant="contained" style={noosaButton}>{children}</Button>
            )
        default:
            return (
                <Button style={noosaButton} >{children}</Button>
            )
    }


};


export default NoosaButton;