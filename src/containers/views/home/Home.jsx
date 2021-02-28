import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { MainCarousel, MainGift, ProductListContainer } from "../../../components";
import { dataAPI } from '../../../api';


const Home = (props) => {


  
  return (
    <>
      {/* <Carousel navButtonsAlwaysVisible="true">
        {props.carousel &&
          props.carousel.map((item, i) => (

            <MainCarouselContainer key={i} />

          ))}
      </Carousel>
      <ProductListContainer/> */}
      <MainGift />
    </>
  );
};

export default Home;
