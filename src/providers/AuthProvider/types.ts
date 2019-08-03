import { User } from 'firebase'

export interface AuthState {
  user?: User
  loginWithGoogle(): void
  logout(): void
}
