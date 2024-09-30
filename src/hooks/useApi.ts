import { useState } from 'react';

const useApi = <T,>(apiFunc: (...args: any[]) => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunc(...args);
      setData(result);
      setError(null);
    } catch (err) {
      console.log('useApi err', err)
      console.log('useApi err.message', err.message)

      setError(err.message);
      setData(null);      
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};

export default useApi;