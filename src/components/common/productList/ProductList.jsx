import React, { useEffect, useState  } from "react";
import data  from '../../../db.json';
import Product from "../productCard";
import axios from "axios";

const ProductList=()=> {
  const [products, setProducts] = useState([2]);

     useEffect(() => {
      axios.get("https://my-json-server.typicode.com/<narek941>/<FakeJSONPlaceholder>").then(response => {
        console.log(response);
      })
     
      
  
  }, []);

    return (
      <>
      <div>{products}+"544"</div>
    <Container>
      {products.map(product => (
        <ItemCard key={1} {...product} />
      ))}
    </Container>

      </>
    );
  
}

export default ProductList;
