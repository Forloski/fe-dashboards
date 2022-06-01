import axios from "axios";

const httpInstance = axios.create({
  baseURL: "",
  timeout: 4000,
});

export default httpInstance;
