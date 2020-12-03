import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import { Button } from '@material-ui/core';
import carouselFirst from '../../../img/carouselFirst.png';
import NoosaButton from '../../buttons/NoosaButton';
const MainCarousel = () =>{

    var items = [
        {
            name: "New Collection",
            description: "Noosa Amsterdam Accessories that you create yourself."
            
        },
        {
            name: "New Collection",
            description: "Noosa Amsterdam Accessories that you create yourself."
            
        },
         {
            name: "New Collection",
            description: "Noosa Amsterdam Accessories that you create yourself."
            
        },
        
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
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
            <div>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <NoosaButton className="CheckButton">
            Shop Now
            </NoosaButton>
            </div>
            
        </div>
    )
}
export default MainCarousel;