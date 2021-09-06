import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../assets/colors'

const ShopItem = ({ title = 'Jordans Air Max 12s ' }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}></View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>899kr</Text>
            <Text style={[styles.price, styles.quantity]}>34'st</Text>
        </View>
    )
}

export default ShopItem

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.green_dark,
        // flex: 1,
        width: '47%',
        minHeight: 280,
        marginLeft: '2%',
        marginVertical: 6,
    },
    image: {
        height: 170,
        width: '100%',
        backgroundColor: 'gray',
        marginBottom: 9,
    },
    title: {
        marginBottom: 4,
        fontSize: 16,
        fontWeight: '600',
    },
    price: {
        fontSize: 14,
        opacity: 0.67,
    },
    quantity: {
        color: colors.green_light,
    },
})
