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
        width: '200px',
        height: '42px',
    };
    const submit = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        opacity: 1,
        color: '#F5F3F2',
        width: '430px',
        height: '48px',
    };
    const register = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        opacity: 1,
        color: '#F5F3F2',
        width: '200px',
        height: '48px',
        left: '60px',
    };
    const simple = {
        background: '#CF8957 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        opacity: 1,
        color: '#F5F3F2',
        width: '232px',
        height: '40px',
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
        case 'register':
            return (
                <Button  variant="contained" style={register}>{children}</Button>
            )
            case 'simple':
            return (
                <Button style={simple}>{children}</Button>
            )
        default:
            return (
                <Button style={shopButton} >{children}</Button>
            )
    }


};


export default NoosaButton;