export interface AuthData {
  email: string
  password: string
}

export interface AuthUser {
  id: string
}

export interface AuthAPI {
  login(data: AuthData): void
  register(data: AuthData): void
}