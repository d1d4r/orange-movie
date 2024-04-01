import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${process.env.AUTH_TOKEN}`
  },
});

// Alter defaults after api has been created

// api.interceptors.request.use(
//   (config) => {
//     config.headers = {
//       // Add your custom headers here
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.AUTH_TOKEN}`, // Example: Authorization header with token from localStorage
//       // Add other headers as needed
//     };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
