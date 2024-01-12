import axios from './axios'
import History from './navigate.service'
import TokenService from './token.service'

const ENDPOINT = '/api'

export type LoginPayload = {
  email: string
  password: string
  role: string
}

export type ForgotPasswordPayload = Pick<LoginPayload, 'email'>
export type ValidateTokenPayload = {
  token: string
}

export type ResetPasswordPayload = Pick<LoginPayload, 'password'> & {
  token: string
}

export async function login(payload: LoginPayload) {
  const { data } = await axios.post(`${ENDPOINT}/auth/login`, { ...payload })
  return data
}

export async function getProfile() {
  const { data } = await axios.get(`${ENDPOINT}/users/me`)
  return data
}

export async function sendMineByIds({ ids, point }: { ids: any[]; point: number }) {
  const { data } = await axios.post(`${ENDPOINT}/point-transactions/add-point-bonus`, {
    userIds: ids,
    triggerType: 'BONUS',
    pointValue: point,
  })
  return data
}

// export async function validateToken(payload: ValidateTokenPayload) {
//   const {data} = await axios.post(`${ENDPOINT}/validate_token`, {...payload})
//   return data
// }

// export async function registerUser(payload: ValidateTokenPayload) {
//   const {data} = await axios.post(`${ENDPOINT}/register`, {...payload})
//   return data
// }

// export async function resetPassword(payload: ResetPasswordPayload) {
//   const {data} = await axios.post(`${ENDPOINT}/reset_password`, {...payload})
//   return data
// }

export async function logout() {
  await axios.put(`${ENDPOINT}/auth/logout`)
  TokenService.removeAuth()
  History.push('/login')
}
