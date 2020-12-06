import React from 'react';
import product from "../../../img/product.png"
const ProductCard = (props) => {

  const cardContainer = {
    backgroundColor: '#686261',
    maxWidth: '300px',
    minHeight: '400px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    margin: '32px auto',
    textAlign: 'center',
    opacity: 1,

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
  

  };
  return (
    <div style={cardContainer} >
      <div style={card}>
        <div style={cardInfoContent}>
        
        </div>
      </div>
    </div>


  )
}

export default ProductCard;