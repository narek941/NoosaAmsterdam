import React, {useState, useEffect} from 'react';
import product_1 from "../../../img/product_1.png"
import product_2 from "../../../img/product_2.png"
import product_3 from "../../../img/product_3.png"
import product_4 from "../../../img/product_4.png"
import product_5 from "../../../img/product_5.png"
import product_6 from "../../../img/product_6.png"
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from '../../../img/IconButton';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

    
const ProductCard = (products) => {
  
  const cardContainer = {
    backgroundColor: '#686261',
    maxWidth: '300px',
    minHeight: '400px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    margin: '32px auto',
    textAlign: 'center',
    opacity: 1,
    position: 'relative',

  };
  const card = {
   
    //backgroundImage: `url(${item.item.img})`,
    minHeight: '330px',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: '20px',

  };

  const cardInfoContent = {
  bottom:"0",
  left: '0',
  position: 'absolute',

  };
  console.log(products)

  return (
    <>
      {products.map((item,index) => ( 
    <Grid item xs={4}>
    <div style={cardContainer} >
      <div style={card}>
        <div style={cardInfoContent}>
        <div>
       {/* {item.item.title}
        <span>{item.item.price}$</span> */}
        </div>
        <div>
        <IconButton type='basket' />
        <NoosaButton>Shop Now</NoosaButton></div>
        </div>
      </div>
    </div>    </Grid>
  ))} 
  </>    
   
  )
}

export default ProductCard;