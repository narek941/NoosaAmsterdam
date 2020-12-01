import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { CourseButton } from '../../index';
import { makeStyles } from '@material-ui/core/styles';
import './Header.css';
import {NavLink as RouterNavLink} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: '#7A7674',
    opacity: '1',
  },
});

const Header = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <div>
          <CourseButton  type='logo' to={"/home"}/>
        </div>

        <div >
          <CourseButton type='navigation' to="/product" >
            product
        </CourseButton>
          <CourseButton type='navigation' to="/about">
            about
        </CourseButton>
          <CourseButton type='navigation' to="/contact">
            contact
        </CourseButton>
          <CourseButton>
            sale
        </CourseButton>
          {children}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;