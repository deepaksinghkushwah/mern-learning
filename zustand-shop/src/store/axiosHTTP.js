import axios from "axios";
let axiosHttp = null;
axiosHttp = axios.create({
  baseURL: "http://localhost:5000",
});

export default axiosHttp;
