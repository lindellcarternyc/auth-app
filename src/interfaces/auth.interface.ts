import { Profile } from "./profile.interface";

export interface AuthData {
  email: string
  password: string
}

export interface AuthUser {
  id: string
  profile: Profile
}

export interface AuthAPI {
  login(data: AuthData): void
  register(data: AuthData): void
}