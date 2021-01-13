import React, { useState } from 'react';
import { AppBar, Toolbar} from '@material-ui/core';
import { HeaderLogo, TypeLinks } from '../../index';
import './Header.css';
import IconButton from '../../../img/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SignPopup from '../popup/SignPop';
import BacketPopup from '../popup/BacketPop';

import {useSelector,useDispatch} from 'react-redux';
import SearchProduct from "../searchProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#7A7674',
  },
}));


const Header = ({ children, ...props }) => {
  const [showSignPopup, SetShowSignPopup] = useState(false);
  const [showBacketPopup, SetShowBacketPopup] = useState(false);
  const classes = useStyles();
  const productInBasket = useSelector(state => state.Backet.productInBasket);
  return (
    <>
    <AppBar className={classes.root} position="static" >
      <Toolbar>
        <HeaderLogo type='header' to={"/home"} />
        <div>
          <TypeLinks type='navigation' to="/product" >
            product
        </TypeLinks>

          <TypeLinks type='navigation' to="/about">
            about
        </TypeLinks>

          <TypeLinks type='navigation' to="/contact">
            contact
        </TypeLinks>
        
          <TypeLinks>
            sale
        </TypeLinks>
        </div>
        {/* <SearchProduct /> */}
          <span><IconButton type='search' /></span>
          <div  onClick={() => SetShowBacketPopup(!showBacketPopup)} className= "basket"><IconButton type='basket' /><span>{ productInBasket.length}</span></div>
          <span  onClick={() => SetShowSignPopup(!showSignPopup)}>
            <IconButton type='user'/></span>

        {children}

      </Toolbar>
    </AppBar>
    {showBacketPopup ?
    <BacketPopup/> 
    : null }
    
    {showSignPopup ?
    <SignPopup/> 
    : null }
    </>
  )
}

export default Header;