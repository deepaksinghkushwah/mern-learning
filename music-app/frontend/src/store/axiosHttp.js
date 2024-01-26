import axios from "axios";

const axiosHttp = axios.create({
  baseURL: 'http://localhost:3000'
});

export default axiosHttp;