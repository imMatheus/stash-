import React, { useLayoutEffect, useState } from 'react'
import {
    KeyboardAvoidingView,
    StyleSheet,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useAuth } from '../context/AuthContext'
import { Button, Input, Text } from 'react-native-elements'
import { auth } from '../firebase'
import colors from '../assets/colors'

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [error, setError] = useState('No error')
    const { signup } = useAuth()

    const register = async () => {
        let g = await signup(email, password, name)
        console.log(g)
        setError(g.message)
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View>
                <Text h3 style={{ marginBottom: 10, fontWeight: '900' }}>
                    Create an{'\n'}
                    account
                </Text>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Your Name</Text>
                <TextInput
                    placeholder='Full Name'
                    autofocus
                    type='text'
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Your Email</Text>
                <TextInput
                    placeholder='Email'
                    type='text'
                    style={styles.input}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    placeholder='Password'
                    type='text'
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.termsContainer}>
                <Pressable
                    style={[
                        styles.checkBox,
                        termsAccepted
                            ? {
                                  backgroundColor: colors.green_dark,
                              }
                            : {
                                  borderColor: colors.green_dark,
                                  borderWidth: 1,
                              },
                    ]}
                    onPress={() => setTermsAccepted((c) => !c)}
                >
                    <AntDesign
                        name='check'
                        size={22}
                        color={termsAccepted ? 'white' : 'transparent'}
                    />
                </Pressable>
                <Text style={{ marginLeft: 30, lineHeight: 20 }}>
                    I agree to the{' '}
                    <Text
                        style={{
                            color: colors.brown_dark,
                            textDecorationStyle: 'solid',
                            textDecorationColor: colors.brown_dark,
                            textDecorationLine: 'underline',
                        }}
                    >
                        Terms & conditions
                    </Text>{' '}
                    and
                    <Text
                        style={{
                            color: colors.brown_dark,
                            textDecorationStyle: 'solid',
                            textDecorationColor: colors.brown_dark,
                            textDecorationLine: 'underline',
                        }}
                    >
                        {' '}
                        Privacy Policy
                    </Text>
                </Text>
            </View>
            <Pressable style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Create account</Text>
            </Pressable>
            <Text> {error}</Text>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: colors.white,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 14,
        marginTop: 12,
        backgroundColor: colors.green_dark,
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    inputWrapper: {
        marginTop: 22,
    },
    inputTitle: {
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 4,
    },
    input: {
        padding: 15,
        fontSize: 14,
        borderRadius: 9,
        color: '#000',
        backgroundColor: '#00000011',
        backgroundColor: colors.green_light + '44',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30,
    },
    checkBox: {
        width: 28,
        height: 28,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
