import { useEffect, useState } from "react";
import api from "../api";

const useGetList = (path, limit = 2, skip = 0) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const { data } = await api.get(`${path}?limit=${limit}&skip=${skip}`);
      console.log(data);
      
      setList(data[path]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchList();
  }, [limit, skip]);
  return [list];
};

export default useGetList;
