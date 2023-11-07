import { useEffect, useState } from "react";
import gamesService, { Game } from "../services/games-service";
import { CanceledError } from "../services/api-client";

interface FetchGames {
  count: number;
  results: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = gamesService.all<FetchGames>();

    request
      .then((response) => {
        setGames(response.data.results);
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
    games,
    errorMessage,
    isLoading,
    setGames,
    setErrorMessage,
    setLoading,
  };
};
