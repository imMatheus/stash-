import React from 'react'
import { AuthProvider } from './context/AuthContext'
import Controller from './routes/Controller'

export default function App() {
    return (
        // initialRouteName='Discover'
        <AuthProvider>
            <Controller />
        </AuthProvider>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: colors.white,
//         backgroundColor: '#ff0000',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })
