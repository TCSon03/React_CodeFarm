import React, { useState, useEffect } from "react";
import "./App.css"

const url = "https://dummyjson.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [sortOption, setSortOption] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async (page, limit) => {
    try {
      const response = await fetch(
        `${url}?limit=${limit}&skip=${(page - 1) * limit}`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, limit);
  }, [currentPage, limit]);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "asc") return a.price - b.price;
    if (sortOption === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="container">
      <div className="function">
        <div>
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
        <div>
          <label>Show: </label>
          <select value={limit} onChange={handleLimitChange}>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={20}>20</option>
          </select>
        </div>
        
        <div>
          <label>Sort price: </label>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="none">All</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            <p>{product.id}</p>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>

      <div >
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
