// hooks/useFetchProducts.js
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchProducts = ({ limit, skip, search, sort }) => {
  const [data, setData] = useState({ products: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

        const res = await axios.get(url);
        let result = res.data.products;

        // Search
        if (search) {
          result = result.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        // Sort
        if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
        if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
        if (sort === "name-asc") result.sort((a, b) => a.title.localeCompare(b.title));
        if (sort === "name-desc") result.sort((a, b) => b.title.localeCompare(a.title));

        setData({ products: result, total: res.data.total });
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, skip, search, sort]);

  return { data, loading, error };
};

export default useFetchProducts;
