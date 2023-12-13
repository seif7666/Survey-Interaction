import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.119:8082/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });
  export default axiosInstance;