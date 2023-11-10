import genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({
  data: genres,
  isLoading: false,
  errorMessage: null,
});

export default useGenres;
