import { useState, useEffect } from 'react'
import { User } from 'firebase'
import { auth } from 'firebase-config'
import { setSession, removeSession } from 'utils/auth-checker'

export const useAuthState = () => {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setSession()
        setUser(user)
      } else {
        removeSession()
        setUser(undefined)
      }
    })

    return () => unsubscribe()
  })

  return { user }
}
