import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://localhost:3002/api/v1",
  timeout: 4000,
});

export default httpInstance;
