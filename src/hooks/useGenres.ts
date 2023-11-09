import useData from "./useData";
import { Game } from "./useGames";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  games: Game[];
}

const useGenres = () => useData<Genre>("/genres", {});

export default useGenres;
