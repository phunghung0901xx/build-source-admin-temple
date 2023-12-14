import axios from 'axios'
import { jwtVerification } from '~/utlis/jwt-verification'
import TokenService from './token.service'
import History from './navigate.service'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_DEVELOP,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'KR EN VN',
  },
})

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken()
    if (token && jwtVerification(token)) {
      config.headers!['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config
    if (originalConfig.url !== 'endpoint login' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true

        try {
          const refreshToken = TokenService.getLocalRefreshToken()
          if (refreshToken && jwtVerification(refreshToken)) {
            const rs = await axios.get(import.meta.env.VITE_API_URL_DEVELOP + '/auth/refresh', {
              headers: {
                Authorization: 'Bearer ' + refreshToken,
              },
            })
            const { data } = rs.data
            if (data) {
              TokenService.updateLocalAccessToken(data.access_token)
            }
            return instance(originalConfig)
          } else {
            TokenService.removeAuth()
            History.push('/login')
            return Promise.reject()
          }
        } catch (_error) {
          TokenService.removeAuth()
          History.push('/login')
          return Promise.resolve(_error)
        }
      }
    }

    return Promise.reject({ error: err.response })
  },
)

export default instance
