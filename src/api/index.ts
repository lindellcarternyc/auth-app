import { AuthData, AuthUser } from "../interfaces/auth.interface"

const mockApiCall = () => {
  return new Promise<AuthUser>((res) => {
    window.setTimeout(() => {
      res({id: 'user1'})
    }, 2500)
  })
}

const login = async (data: AuthData): Promise<AuthUser> => {
  return await mockApiCall()
}

const register = async (data: AuthData) => {
  return await mockApiCall()
}

export default {
  login, register
}