import React from 'react';
import product from "../../../img/product.png"
const ProductCard = (props) => {

  const card = {
    maxWidth: '300px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    margin: 'auto',
    textAlign:  'center',
    backgroundImage: `url(${product})`,
    minHeight:'330px',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: '20px',
    };

  const cardInfoContent = {
    maxWidth:'300px',
    backgroundColor:'#686261',
    height:'20px',
  };
  return(
    
    <div style={card}>
    <div style={cardInfoContent}>
    
    </div>
    </div>

  )
}

export default ProductCard;