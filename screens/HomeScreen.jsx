import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
    // ChalkboardSE-Bold'
    return (
        <ScrollView style={styles.scroller}>
            <Text>Home</Text>
        </ScrollView>
    )
}

const Item = () => {
    return <View>item</View>
}

export default HomeScreen

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
    },
})
