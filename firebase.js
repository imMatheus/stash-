import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyDSkZrEbHfkshnaEbpW6cHLMtq24HKUo7A',
    authDomain: 'stash-7aa3c.firebaseapp.com',
    projectId: 'stash-7aa3c',
    storageBucket: 'stash-7aa3c.appspot.com',
    messagingSenderId: '475592657114',
    appId: '1:475592657114:web:7d3c59f3d37abe269a7de3',
})

export const fs = firebase.firestore()
export const auth = app.auth()
export const db = app.database()

export default app
