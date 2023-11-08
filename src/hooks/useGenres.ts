import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genre-service";
import { CanceledError } from "../services/api-client";

interface FetchGenres {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = genreService.all<FetchGenres>();

    request
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrorMessage(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return {
    genres,
    errorMessage,
    isLoading,
    setGenres,
    setErrorMessage,
    setLoading,
  };
};

export default useGenres;
