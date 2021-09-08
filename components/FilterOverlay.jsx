import React from 'react'
import { StyleSheet, Pressable, Text, View, Animated } from 'react-native'
import colors from '../assets/colors'

const FilterOverlay = ({ fadeAnim, currentFilter, setFilter, filters }) => {
    const Option = ({ filter, text }) => {
        const isActive = currentFilter[0] === filter[0] && currentFilter[1] === filter[1]
        return (
            <Pressable
                style={[styles.option, isActive && styles.selected]}
                onPress={() => setFilter(filter)}
            >
                <View style={styles.circle}>
                    {isActive && <View style={styles.innerCircle}></View>}
                </View>
                <Text>{text}</Text>
            </Pressable>
        )
    }
    return (
        <Animated.View
            style={[
                styles.wrapper,
                {
                    bottom: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '-100%'],
                    }),
                },
            ]}
        >
            <Option filter={filters.date_asc} text='Lastly modified' />
            <Option filter={filters.date_desc} text='Recently modified' />
            <Option filter={filters.price_asc} text='Price low' />
            <Option filter={filters.price_desc} text='Price high' />
            <Option filter={filters.quantity_asc} text='Quantity low' />
            <Option filter={filters.quantity_desc} text='Quantity high' />
        </Animated.View>
    )
}

export default FilterOverlay

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        position: 'absolute',
        height: '90%',
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 25,
    },
    option: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: colors.brown_light,
    },
    circle: {
        width: 24,
        height: 24,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 15,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 19,
        height: 19,
        backgroundColor: 'black',
        borderRadius: 999,
    },
})
