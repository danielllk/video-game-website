import axios from "axios";

let keyAPI = import.meta.env.VITE_APP_API;
export const api = axios.create({
  params: {
    baseURL: "https://rawg.io/api/",
    key: keyAPI,
  },
});
