import { AuthData, AuthUser } from "../interfaces/auth.interface"

import { MOCK_USER } from '../data/mock-users'

const mockApiCall = () => {
  return new Promise<AuthUser>((res) => {
    window.setTimeout(() => {
      res(MOCK_USER)
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