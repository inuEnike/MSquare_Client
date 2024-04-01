import axios from "axios";

const URI = "http://127.0.0.1:4700/";

export const Base = axios.create({
  baseURL: `${URI}`,
});
