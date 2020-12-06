import React, { useEffect, useState  } from "react";
import ProductCard from "../productCard";

const ProductList=(...props)=> {

      
    const [products, setProducts] = useState([
      {id:1},
      {id:2}
    ]);
    return (
  
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>


    );
  
}

export default ProductList;
