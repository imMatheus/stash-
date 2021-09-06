import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth, fs } from '../firebase'

async function signup(email, password, displayName) {
    if (displayName.trim().length < 2) {
        return { message: 'Display name must be 2 or more characters long' }
    }

    if (password?.length < 6) {
        return { message: 'Password has to be 6 or more characters' }
    }

    try {
        await auth.createUserWithEmailAndPassword(email, password)

        await fs // firestore
            .collection('users')
            .doc(auth.currentUser?.uid) // adding a doc with the the id of the users uid
            .set({
                displayName: displayName,
                email: email,
                userUid: auth.currentUser?.uid,
            }) // setting its info
    } catch (error) {
        console.log(error)

        return { message: `Oops, something went wrong. ${error}` }
    }
    return null
}
function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}
function logout() {
    sessionStorage.clear()
    return auth.signOut()
}
async function resetPassword(email) {
    try {
        await auth.sendPasswordResetEmail(email)
    } catch (error) {
        return error.message
    }
}

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [fetchingUser, setFetchingUser] = useState(false)

    useEffect(() => {
        setFetchingUser(true)
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const fetchUser = async (user) => {
                if (!user) return null
                // getting the users data from firestore
                const response = fs.collection('users').doc(user.uid)
                const data = await response.get()
                return { ...user, ...data.data() }
            }
            const response = await fetchUser(user)

            setCurrentUser(response)
            setFetchingUser(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        fetchingUser,
        logout,
        login,
        signup,
        resetPassword,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
