import React, { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([""]);

  useEffect(() => {
    fetchData()
  });

  const fetchData = () => {
     axios('https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder/product')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(products);

  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>
          <ProductCard />
        </li>
      ))}
    </ul>
  )
}

export default ProductList;
