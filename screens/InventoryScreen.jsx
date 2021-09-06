import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { useAuth } from '../context/AuthContext'
import colors from '../assets/colors'
import ShopItem from '../components/ShopItem'

const InventoryScreen = () => {
    const { currentUser } = useAuth()

    return (
        <View style={styles.wrapper}>
            <Text>inventory {currentUser.displayName}</Text>
            <ScrollView>
                <View style={styles.scrollView}>
                    <ShopItem title='dig' />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem title='hej' />
                    <ShopItem title='hej' />
                </View>
            </ScrollView>
        </View>
    )
}

export default InventoryScreen

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollView: {
        paddingVertical: 10,
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
    },
})
