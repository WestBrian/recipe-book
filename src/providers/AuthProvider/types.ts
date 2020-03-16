export interface User {
  uid: string
  email?: string
  photoURL?: string
}

export interface AuthState {
  user?: User
  loginWithGoogle(): void
  logout(): void
}
