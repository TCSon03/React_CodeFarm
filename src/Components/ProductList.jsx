import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((reponse) => reponse.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
