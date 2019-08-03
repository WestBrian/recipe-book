import React, { FC, createContext, useContext } from 'react'
import { AuthState } from './types'
import { auth, GoogleProvider } from 'firebase-config'
import { useAuthState } from 'hooks/useAuthState'
import { hasPreviousSession } from 'utils/auth-checker'
import FullPageLoad from 'components/FullPageLoad'

const AuthContext = createContext<AuthState>({
  loginWithGoogle: () => {},
  logout: () => {},
})

const AuthProvider: FC = ({ children }) => {
  const { user } = useAuthState()

  if (!user && hasPreviousSession()) {
    return <FullPageLoad />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle: () => auth.signInWithPopup(GoogleProvider),
        logout: () => auth.signOut(),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
