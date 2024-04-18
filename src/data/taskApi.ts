import axios, { AxiosInstance } from "axios";

const baseURL = 'http://yourURL/api/v1';

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;