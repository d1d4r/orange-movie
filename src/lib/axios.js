import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${process.env.AUTH_TOKEN}`
  },
});


export default api;
