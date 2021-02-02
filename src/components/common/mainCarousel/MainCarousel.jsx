import React from "react";
import Carousel from "react-material-ui-carousel";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./MainCarousel.module.css";
import first from "../../../img/carouselFirst.png";
import second from "../../../img/carouselSecond.png";
import third from "../../../img/carouselThird.png";


const MainCarousel = () => {
  var items = [
    {
      name: "New Collection",
      description: "Noosa Amsterdam Accessories that you create yourself",
      img: first,
    },
    {
      name: "New Collection",
      description: "Tell your story with the unique Noosa Amsterdam collection",
      img: second,
    },
    {
      name: "Noosa Amsterdam",
      description: "Noosa Amsterdam Accessories that you create yourself",
      img: third,
    },
   
  ];

  return (
    <Carousel navButtonsAlwaysVisible	='true' >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {

  return (
    <div className={styles.slider} style={{ backgroundImage: `url(${props.item.img})`}} >
      <div className={styles.slider_itemContent}>
        <div className={styles.slider_title} >{props.item.name}</div>
        <div className={styles.slider_text} >{props.item.description}</div>

        <NoosaButton>Shop Now</NoosaButton>
      </div>
    </div>
  );
}
export default MainCarousel;
