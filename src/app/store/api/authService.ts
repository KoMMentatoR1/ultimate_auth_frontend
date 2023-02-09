import axios, { AxiosResponse } from 'axios'
import $api, { API_URL } from '../../../shared/http'
import { IUser } from '../../../shared/types/user'
export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IUser>> {
    return axios.post<IUser>(
      `${API_URL}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    )
  }

  static async registration(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<AxiosResponse<IUser>> {
    return axios.post<IUser>(`${API_URL}/auth/registration`, {
      email,
      password,
      firstName,
      lastName,
    })
  }

  static async newPassword(
    code: string,
    newPass: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/newPass', {
      code,
      newPass,
    })
  }

  static async refresh(): Promise<AxiosResponse<IUser>> {
    return await $api.get<IUser>(`/auth/refresh`, { withCredentials: true })
  }

  static async forgotPass(email: string): Promise<AxiosResponse<IUser>> {
    return await $api.post<IUser>(
      `/auth/forgotPass`,
      { email },
      { withCredentials: true }
    )
  }

  static async validateCode(code: string): Promise<AxiosResponse<IUser>> {
    return await $api.put<IUser>(`/auth/forgotPass/${code}`, {
      withCredentials: true,
    })
  }

  static async switchForgotPass(
    code: string,
    password: string
  ): Promise<AxiosResponse<IUser>> {
    return await $api.put<IUser>(
      `/auth/switchForgotPass/${code}`,
      { password },
      {
        withCredentials: true,
      }
    )
  }
}
