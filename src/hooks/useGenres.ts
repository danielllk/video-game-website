import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  let keyAPI = import.meta.env.VITE_APP_API;
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<FetchGenresResponse>(`https://rawg.io/api/genres?key=${keyAPI}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
