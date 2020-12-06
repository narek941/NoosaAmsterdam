import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import carouselFirst from "../../../img/carouselFirst.png";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./MainCarousel.css";
const MainCarousel = () => {
  var items = [
    {
      name: "New Collection",
      description: "Noosa Amsterdam Accessories that you create yourself",
    },
   
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  const slider = {
    backgroundImage: `url(${carouselFirst})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "410px",
    margin: "0",
    top: 0,
    padding: 0,
    position: 'relative',

  };
  const slider_itemContent = {
    textAlign: 'left',
    paddingLeft: '200px',
    margin: '0 auto',
    position: 'absolute',
    top: '26%',
  
  };
  const slider_title = {
    fontSize: '54px',
    lineHeight: '65px',
    color: '#F5F3F2',
    fontWeight: '500',
    letterSpacing: '1.5px',
    marginBottom: '22px',
  };
const slider_text = {
    lineHeight: '44px',
    fontSize: '36px',
    color: '#F5F3F2',
    marginBottom: '50px',
  };
  return (
    <div style={slider}>
      <div style={slider_itemContent}>
        <div style={slider_title} >{props.item.name}</div>
        <div style={slider_text} >{props.item.description}</div>

        <NoosaButton className="CheckButton">Shop Now</NoosaButton>
      </div>
    </div>
  );
}
export default MainCarousel;
