import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;


const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      contentType: "application/json",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  });


export default api;