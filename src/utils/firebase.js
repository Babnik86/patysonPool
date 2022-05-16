import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAy_XejtDlFBdhOrzWXWUhWNPdooCKslAU',
  authDomain: 'pool-patyson.firebaseapp.com',
  projectId: 'pool-patyson',
  storageBucket: 'pool-patyson.appspot.com',
  messagingSenderId: '231418322402',
  appId: '1:231418322402:web:d7415a2b9e003c6afcadbb',
  measurementId: 'G-236HFVQ2ME',
}

firebase.initializeApp(firebaseConfig)
console.log(firebase)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
