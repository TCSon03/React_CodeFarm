import { useEffect, useState } from "react";
import { getTask } from "../api";

const useGet = () => {
  const [products, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await getTask();
      setProduct(response.data)
      
    } catch (error) {
      console.log("Khong co du lieu: ", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return [products, setProduct];
};

export default useGet;
