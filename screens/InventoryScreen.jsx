import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Pressable, Animated, ScrollView, Text, View } from 'react-native'
import { useAuth } from '../context/AuthContext'
import colors from '../assets/colors'
import ShopItem from '../components/ShopItem'
import { fs } from '../firebase'
import { firedumAdd } from 'firedum'
import { AntDesign, Octicons } from '@expo/vector-icons'
import FilterOverlay from '../components/FilterOverlay'

const InventoryScreen = ({ navigation }) => {
    const { currentUser } = useAuth()
    const [items, setItems] = useState([])
    const fadeAnim = useRef(new Animated.Value(1)).current
    const [showFilterOptions, setShowFilterOptions] = useState(false)
    const filters = {
        date_asc: ['lastlyModified', 'asc'],
        date_desc: ['lastlyModified', 'desc'],
        price_asc: ['price', 'asc'],
        price_desc: ['price', 'desc'],
        quantity_asc: ['quantity', 'asc'],
        quantity_desc: ['quantity', 'desc'],
    }

    const [filter, setFilter] = useState(filters.date_asc)

    console.log('navigation', navigation)

    useEffect(() => {
        const unsub = fs
            .collection(`users/${currentUser.uid}/stashes`)
            .orderBy(filter[0], filter[1])
            .onSnapshot((snapshot) => {
                setItems(snapshot.docs.map((doc) => doc.data()))
            })
        return unsub
    }, [currentUser, filter])

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: showFilterOptions ? 0 : 1,
            duration: 380,
            useNativeDriver: false,
        }).start()
    }, [showFilterOptions])

    const add = async () => {
        console.log('start')
        await firedumAdd({
            collectionReference: fs.collection(`users/${currentUser.uid}/stashes`),
            fields: {
                imageUrl: ':sports',
                title: ':productName',
                quantity: ':number',
                price: ':number',
                lastlyModified: ':recent',
            },
            numberOfDocuments: 3,
        })
        console.log('end')
    }

    return (
        <View style={styles.wrapper}>
            {/* <Pressable
                onPress={() => {
                    add()
                }}
                style={{ height: 100, backgroundColor: 'red' }}
            >
                <Text>hiiiiiiideeeee</Text>
            </Pressable> */}
            <Text>inventory {currentUser.displayName}</Text>
            <Pressable
                style={styles.filterContainer}
                onPress={() => {
                    setShowFilterOptions((c) => !c)
                }}
            >
                <Text style={{ marginRight: 5 }}>Filtrera och sortera</Text>
                <Octicons name='settings' size={24} color='black' />
            </Pressable>
            <ScrollView>
                <View style={styles.scrollView}>
                    {items.map((item, index) => (
                        <ShopItem
                            key={index}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                </View>
            </ScrollView>
            <FilterOverlay
                fadeAnim={fadeAnim}
                currentFilter={filter}
                setFilter={setFilter}
                filters={filters}
            />
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
    filterContainer: {
        backgroundColor: 'red',
        height: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
