import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
  },
});


export default api;
