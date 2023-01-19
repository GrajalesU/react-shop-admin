import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function useFetch(endpoint: string) {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await axios.get(endpoint);
    setData(response.data);
  }, [endpoint]);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [fetchData]);

  return {
    data,
  };
}
