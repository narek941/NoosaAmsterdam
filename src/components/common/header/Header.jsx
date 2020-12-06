import React from 'react';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import { HeaderLogo, TypeLinks} from '../../index';
import './Header.css';
import IconButton from '../../../img/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme)=>({
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
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      }, }, },
}));



const Header = ({ children, ...props }) => {

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <div>
          <HeaderLogo  type='header' to={"/home"}/>
        </div>
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
        <div>
          
        </div>
        <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        <IconButton type='search' />
        <IconButton type='basket' />
        <IconButton type='user' />    
        {children}
 
      </Toolbar>
    </AppBar>
  )
}

export default Header;