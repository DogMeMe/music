import { IBanner } from '@/api/find'
import axios, { AxiosError, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
})

// axiosInstance.interceptors.response.use((response: AxiosResponse) => {
//     if (response.status === 200 && response.data.code === 200) {
//         return Promise.resolve(response.data)
//     }
//     return Promise.reject(response)
// }, (error: AxiosError) => {
//     return Promise.reject(error);
// })

export default axiosInstance
