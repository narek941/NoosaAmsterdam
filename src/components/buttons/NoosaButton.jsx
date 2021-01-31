import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NoosaButton = ({ to, children, type, ...props }) => {
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
    const submit = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        opacity: 1,
        color: '#F5F3F2',
        width: '430px',
        height: '48px',
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
                <Button component={RouterNavLink} to={to} style={popupButton}>{children}</Button>
            )
            case 'submit':
            return (
                <Button type="submit" variant="contained" style={submit}>{children}</Button>
            )
        default:
            return (
                <Button style={shopButton}>{children}</Button>
            )
    }


};


export default NoosaButton;