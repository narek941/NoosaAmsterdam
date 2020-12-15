import React from "react";
import Carousel from "react-material-ui-carousel";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./MainCarousel.module.css";

const MainCarousel = () => {
  var items = [
    {
      name: "New Collection",
      description: "Noosa Amsterdam Accessories that you create yourself",
    },
    {
      name: "New Collection",
      description: "Noosa Amsterdam Accessories that you create yourself",
    },
    {
      name: "New Collection",
      description: "Noosa Amsterdam Accessories that you create yourself",
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
    <div className={styles.slider} >
      <div className={styles.slider_itemContent}>
        <div className={styles.slider_title} >{props.item.name}</div>
        <div className={styles.slider_text} >{props.item.description}</div>

        <NoosaButton>Shop Now</NoosaButton>
      </div>
    </div>
  );
}
export default MainCarousel;
