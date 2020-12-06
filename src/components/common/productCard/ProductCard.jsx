import React, {useState, useEffect} from 'react';
import product from "../../../img/product.png"
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from '../../../img/IconButton';


    
const ProductCard = () => {

 

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
   
    backgroundImage: `url(${product})`,
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
  return (
    <div style={cardContainer} >
      <div style={card}>
        <div style={cardInfoContent}>
        <div>
        {}
        <span>30$</span>
          
        </div>
        <div>
        <IconButton type='basket' />
        <NoosaButton>Shop Now</NoosaButton></div>
        </div>
      </div>
    </div>


  )
}

export default ProductCard;