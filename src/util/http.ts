import toast from "@/components/Toast/toast-info";
import axios, { AxiosPromise, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://192.168.2.194:3000/",
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosPromise => {
    if (response.status === 200 && response.data.code === 200) {
      return Promise.resolve(response);
    }
    toast(response.data.message);
    return Promise.reject(response);
  },
  (error) => {
    toast("network error");
    return Promise.reject(error);
  }
);

export default axiosInstance;
