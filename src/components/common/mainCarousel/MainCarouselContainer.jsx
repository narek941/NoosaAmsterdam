import React from "react";
import MainCarousel from "./MainCarousel";
import { connect } from 'react-redux'
import Carousel from "react-material-ui-carousel";
import { dataAPI } from '../../../api';
import {actionSetCarouselToRedux} from '../../../redux/reducers/carouselReducer'
const MainCarouselContainer = (props) => {



const dispatch = props.dispatch;
  console.log(props)





  return (
    <Carousel navButtonsAlwaysVisible="true">
      {props.carousel &&
        props.carousel.map((item, i) => (
          <MainCarousel carousel={props.carousel} />
        ))}
    </Carousel>)

}




const mapStateToProps = state => {
  return {
    carousel: state.carousel,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCarouselContainer);
