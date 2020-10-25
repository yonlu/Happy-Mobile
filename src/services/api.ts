import axios from "axios";

const api = axios.create({
  baseURL: "http://75.102.79.122:3333",
});

export default api;
