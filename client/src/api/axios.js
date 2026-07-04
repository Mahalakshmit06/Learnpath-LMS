import axios from "axios";

const api = axios.create({
  baseURL: "https://learnpath-lms-fj5o.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;