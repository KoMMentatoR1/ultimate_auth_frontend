export interface IReqUser {
  email: string
  password: string
  lastName: string
  firstName: string
}

export interface IUser {
  accessToken: string
  user: {
    id: number
    email: string
    isActivated: boolean
    role: string
    lastName: string
    firstName: string
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
