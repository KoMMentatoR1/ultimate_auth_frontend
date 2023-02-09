import axios from 'axios'
import { IUser } from '../types/user'

export const API_URL: string = `http://192.168.0.121:3001/api`

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

$api.interceptors.request.use(config => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<IUser>(`${API_URL}/auth/refresh`, {
          withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (e) {}
    }
    throw error
  }
)

export default $api
