// hooks/usePagination.js
import { useState } from "react";

const usePagination = (initialLimit = 12) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);

  const skip = (page - 1) * limit;

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));
  const changeLimit = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  return { page, limit, skip, nextPage, prevPage, changeLimit };
};

export default usePagination;
