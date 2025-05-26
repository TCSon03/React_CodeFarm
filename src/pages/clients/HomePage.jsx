import { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getAllProduct();
      console.log(response.data);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h2>Trending products</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.title || "Tên sản phẩm không có"}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default HomePage;
