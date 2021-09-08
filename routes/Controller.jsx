import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoadingScreen from '../screens/LoadingScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'
import InventoryScreen from '../screens/InventoryScreen'
import { useAuth } from '../context/AuthContext'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from '../assets/colors'

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
                <NavigationContainer>
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
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.green_light,
                    paddingVertical: 10,
                    color: '#f00',
                },
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='home' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Inventory'
                component={InventoryScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='appstore-o' size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default Controller
