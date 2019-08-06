import { User } from 'providers/AuthProvider/types'
import { auth, firestore } from 'firebase-config'
import { useEffect, useState } from 'react'

export const useAuthState = () => {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        console.log('fetching user')
        const userDoc = await firestore.doc(`users/${user.uid}`).get()
        const userData = await userDoc.data()
        setUser(userData as User)
      } else {
        setUser(undefined)
      }
    })

    return () => unsubscribe()
  }, [])

  return { user }
}
