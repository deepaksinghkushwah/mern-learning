import axios from "axios";

const axiosHTTP = axios.create({
    baseURL: 'http://localhost:5000'
});

export default axiosHTTP;