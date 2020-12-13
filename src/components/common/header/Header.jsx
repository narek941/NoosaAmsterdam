import React, { useState } from 'react';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import { HeaderLogo, TypeLinks } from '../../index';
import './Header.css';
import IconButton from '../../../img/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SignPopup from '../popup/SignPop';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#7A7674',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    
      width: '12ch', 
      marginLeft: '30ch',
    
  },
}));

const togglePopup = ()=>{  
  console.log("ds")
} 

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

        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
          <span><IconButton type='search' /></span>
          <span><IconButton type='basket' /></span>
          <span  onClick={() => SetShowPopup(!showPopup)}><IconButton type='user'/></span>

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