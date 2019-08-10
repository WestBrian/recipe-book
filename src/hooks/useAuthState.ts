import { User as FirebaseUser } from 'firebase'
import { User } from 'providers/AuthProvider/types'
import { auth, firestore } from 'firebase-config'
import { removeSession, setSession } from 'utils/auth-checker'
import { useEffect, useState } from 'react'

export const useAuthState = () => {
  const [user, setUser] = useState<FirebaseUser | undefined>(undefined)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      console.log('fetching auth state')
      if (user) {
        setSession()
        setUser(user as FirebaseUser)
      } else {
        removeSession()
        setUser(undefined)
      }
    })

    return () => unsubscribe()
  }, [])

  return { user }
}

export const useUser = (firebaseUser?: FirebaseUser) => {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    console.log('fetching user doc')
    if (firebaseUser) {
      const unsubscribe = firestore
        .collection('users')
        .doc(firebaseUser.uid)
        .onSnapshot(async snapshot => {
          const userData = await snapshot.data()
          setUser(userData as User)
        })
      return () => unsubscribe()
    } else {
      setUser(undefined)
    }
  }, [firebaseUser])

  return { user }
}
