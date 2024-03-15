import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';


export const LogIn = () => {
    const navigation=useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isExpectingOTP, setIsExpectingOTP] = useState(false);
    const [countdown, setCountdown] = useState(15);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    let timer:any;

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleVerify=()=>{
        navigation.navigate('Home')
    }
    
    const startCountdown = () => {
        setPhoneNumber('');
        setCountdown(15);
        setIsExpectingOTP(true);
        setIsCountingDown(true);
        timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);
        setTimeout(() => {
            setIsCountingDown(false);
            clearInterval(timer);
        }, 15000);
    };

    useEffect(() => {
        if (countdown === 0) {
            clearInterval(timer);
            setPhoneNumber('');
        }
        return () => clearInterval(timer);
    }, [countdown]);

    return (
        <View style={styles.container}>
            <View style={{gap:5,marginTop:100,marginBottom:50}}>
            <Text style={styles.title}>Create your account.</Text>
            <Text style={styles.subtitle}>Already have an account?
            <Text  style={styles.highlightedText}onPress={()=>console.log('abcd')}> Log in using your phone number.
                </Text>
            </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={isExpectingOTP ? "Enter OTP" : "Enter your phone number"}
                    value={phoneNumber}
                    keyboardType='number-pad'
                    onChangeText={setPhoneNumber}
                    placeholderTextColor={'#B81D24'}
                />
                <TouchableOpacity style={styles.otpButton} onPress={startCountdown}>
                    <Text style={styles.otpText}>{isCountingDown ? `${countdown} sec` : "OTP"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.termsAndConditions}>
                <TouchableOpacity
                    style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
                    onPress={toggleCheckbox}
                >
                    {isChecked && <Text style={styles.tick}>✓</Text>}
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    I agree to the terms and conditions.
                </Text>
            </View>
            <TouchableOpacity style={styles.varifyButtonContainer} onPress={handleVerify} disabled={!isChecked}>
                <Text style={styles.verifyText}>VERIFY</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center'
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    highlightedText:{
        fontSize:16,
        padding:5,
        color:'#B81D24'
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: '#ccc',
        alignItems:'center',
        borderWidth: 1,
        borderRadius:10,
        padding:10,
        marginTop: 20,
        marginHorizontal:10,
        elevation:3,
        backgroundColor:'white'
    },
    input: {
        flex: 1,
        height: 40,
        fontSize:20,
        paddingLeft:20,
        color:'#B81D24',
    },
    otpText:{
        fontSize:16,
        fontWeight:'700',
        color:'black'
    },
    otpButton:{
        padding:5
    },
    checkboxText: {
        marginLeft: 10,
    },
    termsAndConditions: {
        gap: 5,
        marginTop: 10,
        marginHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '75%',
    },
    checkbox: {
        borderWidth: 1,
        borderRadius: 3,
        width: 20,
        height: 20,
    },
    checked: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        backgroundColor: 'gray',
    },
    unchecked: {
        borderColor: 'black',
    },
    termsText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'gray'
    },
    tick:{
        color:'white'
    },
    varifyButtonContainer:{
        backgroundColor:'white',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'gray',
        elevation:3,
        marginTop:50,
    },
    verifyText:{
        fontSize:18,
        fontWeight:'700',
        color:'#B81D24'
    },
});
