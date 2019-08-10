import { AuthState, User } from './types'
import { GoogleProvider, auth, firestore } from 'firebase-config'
import { hasPreviousSession } from 'utils/auth-checker'
import { useAuthState, useUser } from 'hooks/useAuthState'
import FullPageLoad from 'components/FullPageLoad'
import React, { FC, createContext, useContext } from 'react'

const AuthContext = createContext<AuthState>({
  loginWithGoogle: () => {},
  logout: () => {},
})

const loginWithGoogle = () =>
  auth.signInWithPopup(GoogleProvider).then(async ({ user }) => {
    if (user) {
      const userRef = firestore.doc(`users/${user.uid}`)
      const currentUser = await userRef.get()
      if (!currentUser.exists) {
        const newUser: User = {
          uid: user.uid,
          email: user.email || undefined,
          photoURL: user.photoURL || undefined,
        }
        await userRef.set(newUser)
      }
    }
  })

const AuthProvider: FC = ({ children }) => {
  const { user: firebaseUser } = useAuthState()
  const { user } = useUser(firebaseUser)

  if (!user && hasPreviousSession()) {
    return <FullPageLoad />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        logout: () => auth.signOut(),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
