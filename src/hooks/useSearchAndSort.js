// hooks/useSearchAndSort.js
import { useState } from "react";

const useSearchAndSort = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(""); // "", "price-asc", "price-desc", "name-asc", "name-desc"

  return {
    search,
    sort,
    setSearch,
    setSort,
  };
};

export default useSearchAndSort;
