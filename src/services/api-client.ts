import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4ca53b99cbf34dca836d685e1871f832",
  },
});

export { CanceledError };
