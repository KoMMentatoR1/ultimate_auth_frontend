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

  static async oAuth2Google(token: string): Promise<AxiosResponse<IUser>> {
    return await $api.post<IUser>(
      `/auth/oauth2/google/login`,
      { token },
      {
        withCredentials: true,
      }
    )
  }

  static async oAuth2yandex(token: string): Promise<AxiosResponse<IUser>> {
    return await $api.post<IUser>(
      `/auth/oauth2/yandex/login`,
      { token },
      {
        withCredentials: true,
      }
    )
  }

  static async oAuth2yandexToken(code: string) {
    const params = new URLSearchParams()
    params.append('grant_type', 'authorization_code')
    params.append('code', code)
    params.append('client_id', 'bcdec515185c4acfb70bff5585278224')
    params.append('client_secret', '7c31a1e2848648259dad4b2953cdc147')
    return await axios.post(`https://oauth.yandex.ru/token`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }
}
