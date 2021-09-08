import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: 'AIzaSyDSkZrEbHfkshnaEbpW6cHLMtq24HKUo7A',
    authDomain: 'stash-7aa3c.firebaseapp.com',
    projectId: 'stash-7aa3c',
    storageBucket: 'stash-7aa3c.appspot.com',
    messagingSenderId: '475592657114',
    appId: '1:475592657114:web:7d3c59f3d37abe269a7de3',
}

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}
export const fs = firebase.firestore()
export const auth = app.auth()

export default app
