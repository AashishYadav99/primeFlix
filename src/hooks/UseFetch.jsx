import { useState, useEffect } from "react";
import axios from "axios";

function UseFetch(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(endpoint);
      setLoading(false);
      setData(response.data.results);
    } catch (error) {
      console.log("error is :", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {data, loading};
}

export default UseFetch;
