import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoadingScreen from '../screens/LoadingScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'
import InventoryScreen from '../screens/InventoryScreen'
import { useAuth } from '../context/AuthContext'
import { Text, View } from 'react-native'

const Tab = createBottomTabNavigator()

const Controller = () => {
    const { currentUser, fetchingUser } = useAuth()
    // if (!currentUser) return <RegisterScreen />
    return (
        <View style={{ backgroundColor: 'red', flex: 1 }}>
            <StatusBar style='dark' />
            {fetchingUser ? (
                <LoadingScreen />
            ) : currentUser ? (
                <NavigationContainer style={{ backgroundColor: 'red' }}>
                    <Screens />
                </NavigationContainer>
            ) : (
                <RegisterScreen />
            )}
        </View>
    )
}

const Screens = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                // initialParams={{ iconName: 'play-circle' }}
            />
            <Tab.Screen
                name='Inventory'
                component={InventoryScreen}
                // initialParams={{ iconName: 'play-circle' }}
            />
            {/* <Tab.Screen
            name='Register'
            component={RegisterScreen}
            // initialParams={{ iconName: 'play-circle' }}
        /> */}
        </Tab.Navigator>
    )
}
export default Controller
