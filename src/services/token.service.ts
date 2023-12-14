import { User } from "../types/user.interface"

const getLocalRefreshToken = () => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user') as string)
      return user?.refreshToken
    }
  }

const getLocalAccessToken = () => {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user') as string)
    return user?.accessToken
  }
}

const updateLocalAccessToken = (token: string) => {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user') as string)
    user.accessToken = token
    localStorage.setItem('user', JSON.stringify(user))
  }
}

const getAuth = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('user') as string)
  }
}

const setAuth = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

const removeAuth = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user')
  }
}

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getAuth,
  setAuth,
  removeAuth,
}

export default TokenService
