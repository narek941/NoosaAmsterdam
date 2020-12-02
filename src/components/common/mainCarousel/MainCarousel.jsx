import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import { Button } from '@material-ui/core';

const MainCarousel = () =>{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
            
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
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <Button className="CheckButton">
                Check it out!
            </Button>
        </>
    )
}
export default MainCarousel;