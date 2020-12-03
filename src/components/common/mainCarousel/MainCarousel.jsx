import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import { Button } from '@material-ui/core';
import carouselFirst from '../../../img/carouselFirst.png';

const MainCarousel = () =>{

    var items = [
        {
            name: "New Collection",
            description: "Noosa Amsterdam Accessories that you create yourself."
            
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "New collection",
            description: "Hello World!"
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item}/> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    const myStyles = {
        backgroundImage: `url(${carouselFirst})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '555px',
      };
    return (
        <div  style={myStyles} >
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <Button className="CheckButton">
            Shop Now
            </Button>
        </div>
    )
}
export default MainCarousel;