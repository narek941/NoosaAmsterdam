import React, {useEffect} from "react";
import MainCarousel from "./MainCarousel";
import { connect } from 'react-redux'
import Carousel from "react-material-ui-carousel";
import { getCarouselThunk } from '../../../redux/reducers/carouselReducer';

const MainCarouselContainer = (props) => {
  useEffect(()=>{
    props.getCarouselThunk();

  },[])

  return (
      !props.carousel?
          <>Loading</>
          :
     <Carousel>
      {props.carousel.map((item, i) => (
      <MainCarousel item={item} key ={i}/>
      ))}
    </Carousel>
  )
}

const mapStateToProps = state => {
  return {
    carousel: state.carouselItems.carousel,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCarouselThunk,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCarouselContainer);
