import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { MainCarousel, MainGift, ProductList } from "../../../components";



const Home = (props) => {
 
  return (
    <>
      {/* <Carousel navButtonsAlwaysVisible="true">
        {props.carousel &&
          props.carousel.map((item, i) => (

            <MainCarousel key={i} item={item} />

          ))}
      </Carousel>
      <ProductList item={props.bestProduct} /> */}
      <MainGift />
    </>
  );
};

export default Home;
