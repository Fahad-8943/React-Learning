import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://resume-server-8ot9.onrender.com",
  timeout: 5000,
});

// responce interceptors handling gloabal/ common errors

axiosInstance.interceptors.response.use(
  (responce) => {
    console.log("responced recived");
    return responce;
  },
  (error) => {
    if (error.responce) {
      const status = error.responce.status;
      if (status == 401) {
        console.log("Un-Authorized");
      } else if (status == 404) {
        console.log("API Not Found");
      } else if (status == 500) {
        console.log("Server Error!!");
      } else if (error.request) {
        console.log("No response from server");
      } else {
        console.log("Error" + error.message);
      }
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
