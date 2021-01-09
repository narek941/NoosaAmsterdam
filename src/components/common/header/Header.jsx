import React, { useState } from 'react';
import { AppBar, Toolbar} from '@material-ui/core';
import { HeaderLogo, TypeLinks } from '../../index';
import './Header.css';
import IconButton from '../../../img/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SignPopup from '../popup/SignPop';
import SearchProduct from "../searchProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#7A7674',
  },
}));


const Header = ({ children, ...props }) => {
  const [showPopup, SetShowPopup] = useState(false);
  const classes = useStyles();

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
      <SearchProduct />
          <span><IconButton type='search' /></span>
          <span><IconButton type='basket' /></span>
          <span  onClick={() => SetShowPopup(!showPopup)}>
            <IconButton type='user'/></span>

        {children}

      </Toolbar>
    </AppBar>
    {showPopup ?
    <SignPopup/> 
    : null }
    </>
  )
}

export default Header;