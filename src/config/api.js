import axios from "axios";

const API_URL = "https://localhost:8888/";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
