import React, { useEffect, useState  } from "react";
import data  from '../../../db.json';
import Product from "../productCard";

const ProductList=()=> {
  const [products, setProducts] = useState([2]);

     useEffect(() => {
      setProducts(data);
      
  
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
