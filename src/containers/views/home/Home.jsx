import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { MainCarousel, MainGift, ProductList } from "../../../components";
import { setBestProductItems, setCarouselItems } from "../../../redux/reducers/homeReducer";
import { compose } from "redux";
import { connect } from "react-redux";


const Home = (props) => {
 





  useEffect(() => {
    props.setCarouselItems();
    props.setBestProductItems();
  }, []);


  return (
    <>
      <Carousel navButtonsAlwaysVisible="true">
        {props.carousel &&
          props.carousel.map((item, i) => (

            <MainCarousel key={i} item={item} />

          ))}
      </Carousel>
      <ProductList item={props.bestProduct} />
      <MainGift />
    </>
  );
};
let mapStateToProps = (state) => {
  return {
    carousel: state.Home.carousel,
    bestProduct: state.Home.bestProduct,
  }
}
export default compose(
  connect(mapStateToProps, { setCarouselItems, setBestProductItems })
)(Home)
