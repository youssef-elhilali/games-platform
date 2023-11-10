import platform from "../data/Platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platform,
  isLoading: false,
  errorMessage: null,
});

export default usePlatforms;
