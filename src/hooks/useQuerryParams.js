const inititalParams = {
  search: "",
  sortBy: "price",
  order: "asc",
  limit: 12,
  page: 1,
};

const useQuerryParams = (params) => {
  const [params, setParams] = useState(params);
  const resetParams = () => {
    setParams(inititalParams);
  };
  const updateParams = () => {
    setParams((prev) => ({
      ...prev,
      ...params,
    }));
  };
  return [params, updateParams, resetParams];
};
