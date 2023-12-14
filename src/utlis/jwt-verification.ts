import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  sub: string
  exp: number
}

export function jwtVerification(access_token: string) {
  try {
    if (!access_token.trim()) {
      return false
    }
    const decoded: DecodedToken = jwtDecode(access_token)
    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime) {
      return false
    }

    return true
  } catch {
    return false
  }
}
