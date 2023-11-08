import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import create from "../services/http-service";

interface FetchRes<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = create(endpoint).all<FetchRes<T>>();

    request
      .then((response) => {
        setData(response.data.results);
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
    data,
    errorMessage,
    isLoading,
  };
};

export default useData;
