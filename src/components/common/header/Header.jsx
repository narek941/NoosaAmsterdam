import React from 'react';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import { HeaderLink,HeaderLogo, TypeLinks} from '../../index';
import { makeStyles, } from '@material-ui/core/styles';
import './Header.css';
import {NavLink as RouterNavLink} from 'react-router-dom';
import IconButton from '../../../img/IconButton';


const useStyles = makeStyles({
  root: {
    background: '#7A7674',
    opacity: '1',
    fontSize: '19px',
  },
});

const Header = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <div>
          <HeaderLogo  type='logo' to={"/home"}/>
        </div>

        <div >
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
          {children}
        </div>
        <TextField  label="Search" variant="outlined" />
        <IconButton type='search' />
        <IconButton type='basket' />
        <IconButton type='user' />

      </Toolbar>
    </AppBar>
  )
}

export default Header;