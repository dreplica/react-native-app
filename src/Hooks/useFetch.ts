import { useState } from "react";


const useFetch = <T>(callback: (...args: unknown[]) => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args: []) => {
    setLoading(true);
    try {
      const response = await callback(...args);
      setError("");
      setData(response);
    } catch (error) {
      console.log({error})
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
