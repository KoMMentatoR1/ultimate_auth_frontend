export interface IReqUser {
  email: string
  password: string
  username: string
}

export interface IUser {
  accessToken: string
  user: {
    id: number
    email: string
    isActivated: boolean
    role: string
    username: string
  }
}

export interface IUserAdmin {
  id: number
  email: string
  isActivated: boolean
  role: string
}

export interface IUserAdminUpdate {
  id: number
  role: string
}
