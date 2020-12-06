import React from 'react';
import NoosaButton from "../../buttons/NoosaButton";
import gift_bg from '../../../img/gift_bg.png'
const MainGift = (props) => {

 
  const mainStyle = {
    backgroundImage: `url(${gift_bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "453px",
    margin: "0",
    top: 0,
    padding: 0,
    position: 'relative',

  };
  const content = {
    transform: `translateY(50%)` ,
    position: 'absolute',
    right:'0px',
  };
  const text = {

    margin: 'auto',
    padding: '40px',
    width: '600px',
    height: '77px',
    backgroundColor:'#686261',
    borderRadius: '4px',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
    letterSpacing: '0px',
    color: '#F5F3F2',
    fontSize:'29px',
    fontWeight: '600',
  };
  const button = {
   paddingTop: '20px',
   left:0,
   position: 'absolute',
  };
  return (
    <div style={mainStyle} >
      <div style={content}>
          <div style={text}>
              Buy a gift card for any price and you are free, from further choice of gifts.
              </div>
              <div style={button}>
                  <NoosaButton >Shop Now</NoosaButton>
              </div>
          
      </div>
        
       
    </div>


  )
}

export default MainGift;