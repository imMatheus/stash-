import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../assets/colors'

const ShopItem = ({ title, imageUrl, quantity, price }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}kr</Text>
            <Text style={[styles.price, styles.quantity]}>{quantity}'st</Text>
        </View>
    )
}

export default ShopItem

const styles = StyleSheet.create({
    container: {
        width: '47.75%',
        minHeight: 280,
        marginLeft: '1.5%',
        marginVertical: 6,
    },
    imageContainer: {
        height: 170,
        width: '100%',
        backgroundColor: 'gray',
        marginBottom: 9,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        marginBottom: 4,
        fontSize: 16,
        fontWeight: '600',
    },
    price: {
        fontSize: 14,
        opacity: 0.73,
    },
    quantity: {
        color: colors.green_light,
    },
})
