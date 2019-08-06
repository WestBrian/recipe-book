import 'firebase/auth'
import 'firebase/firestore'
import * as firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: 'AIzaSyAoAJ57_q5vkd1c7wIgp4NPg58ghmvh2Co',
  authDomain: 'recipe-book-8ef66.firebaseapp.com',
  databaseURL: 'https://recipe-book-8ef66.firebaseio.com',
  projectId: 'recipe-book-8ef66',
  storageBucket: '',
  messagingSenderId: '1022055509031',
  appId: '1:1022055509031:web:7d7b3f9549f01432',
})

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const FieldValue = firebase.firestore.FieldValue
export const firestore = firebase.firestore()
