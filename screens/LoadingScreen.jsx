import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, Easing, View } from 'react-native'
import colors from '../assets/colors'

const LoadingScreen = () => {
    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0))
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 750,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start()
    })
    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        transform: [{ rotate: spin }],
                    },
                ]}
            ></Animated.View>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: colors.white,
    },

    fadingContainer: {
        width: 42,
        height: 42,
        borderRadius: 9999,
        borderWidth: 6,
        // position: 'relative',
        borderColor: colors.green_dark + '58',
        borderTopColor: colors.green_dark,
    },
})
