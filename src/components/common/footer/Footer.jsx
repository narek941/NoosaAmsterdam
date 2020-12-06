import React from 'react';
import { Grid } from '@material-ui/core';
import { HeaderLogo, TypeLinks } from '../../index';


const Footer = ({ children, ...props }) => {

  const footerContainer = {
    backgroundColor: '#7A7674',
    minHeight: '300px',
    paddingLeft: '180px',
    paddingTop: '50px',
    textAlign: 'left',
    opacity: '1',
  };
  const footerRow = {
    fontSize: '16px',
    letterSpacing: '0px',
    color: '#F5F3F2',
    opacity: '1',



  };
  const firstRow = {
    width: '260px',


  };
  
  const ulStyle = {
    listStyleType: 'none',
  };
  const liStyle = {
    textDecoration: 'none',
    height: '19px',
    fontSize: '16px',
    marginTop: "5px"

  };
  return (
    <div style={footerContainer}>
      <Grid style={footerRow} justify="center" alignItems="center" container direction="row">
        <Grid item xs={12} md={3}>
          <div style={firstRow}>
            <HeaderLogo/>
          NOOSA-Amsterdam are accessories made of high quality leather, decorated with handmade buttons.
          </div>

        </Grid>
        <Grid item xs={12} md={3}>
          <div>

            <ul style={ulStyle}>
              <h2>Information</h2>
              <li style={liStyle}><TypeLinks type='navigation' to="/home">Home</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/about">About Us</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/delivery">Delivery</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/payment">Payment</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/contact">Contacts</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/sale">Sale</TypeLinks></li>
            </ul>

          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div >

            <ul style={ulStyle}>
              <h2>Products</h2>
              <li style={liStyle}><TypeLinks type='navigation' to="/product">Bracelets</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/product">Buttons</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/product">Bags</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/product">Wallets</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/product">Belts</TypeLinks></li>
              <li style={liStyle}><TypeLinks type='navigation' to="/product">Gift Crad</TypeLinks></li>
            </ul>

          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div >

            <ul style={ulStyle}>
              <h2>Contacts</h2>
              <li style={liStyle}><TypeLinks >Phone Number 319-481-1070</TypeLinks></li>
              <li style={liStyle}><TypeLinks >Mobile Number 712-253-2757</TypeLinks></li>
              <li style={liStyle}><TypeLinks >Email 7wchb77kv59@temporary-mail.netm</TypeLinks></li>
              <li style={liStyle}><TypeLinks >Address 2710 Pyramid Valley Road</TypeLinks></li>
              <li style={liStyle}><TypeLinks >Follow us on social networks</TypeLinks></li>
            </ul>
            
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;