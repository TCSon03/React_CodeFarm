import { useEffect, useState } from "react";
import { getAllProduct } from "../api/productApi";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await getAllProduct();
    setProducts(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [products];
};
export default useFetch;
