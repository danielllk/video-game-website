import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  let keyAPI = import.meta.env.VITE_APP_API;
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<FetchResponse<T>>(`https://rawg.io/api/${endpoint}?key=${keyAPI}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
