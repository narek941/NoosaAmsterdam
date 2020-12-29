import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const NoosaButton = ({ children, type, ...props }) => {
    const shopButton = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        color: '#F5F3F2',
        width: '160px',
        height: '56px',
    };
    const shopButtonSmall = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        color: '#F5F3F2',
        width: '116px',
        height: '36px',
    };
    const shopButtonExtraSmall = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        color: '#F5F3F2',
        width: '80px',
        height: '24px',
        fontSize: "11px"
    };
    const popupButton = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        color: '#F5F3F2',
        width: '228px',
        height: '49px',
    };
    switch (type) {
        case 'productSmall':
            return (
                <Button style={shopButtonExtraSmall}>{children}</Button>
            )
        case 'product':
            return (
                <Button style={shopButtonSmall}>{children}</Button>
            )
        case 'popup':
            return (
                <Button style={popupButton}>{children}</Button>
            )
        default:
            return (
                <Button style={shopButton}>{children}</Button>
            )
    }


};


export default NoosaButton;