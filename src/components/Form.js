import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  
        StyleSheet, 
        View,
        Text,
        TextInput,
        TouchableOpacity,
        Picker
        } from 'react-native';

export default function Form({ navigation }) {
   
    return (
        <View>
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Username"
                    placeholderTextColor = "white"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> password.focus()}
                />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "white"
                    ref={(input) => password = input}
                />
                <TouchableOpacity type="login" style={styles.loginbutton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.callstoaction}>Already a member? Login above.</Text>
                </View>
                <TouchableOpacity type ="signup" style ={styles.signupbutton}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity> 
                <View>
                    <Text style={styles.signupcallstoaction}>Need an account? Click Signup.</Text>
                </View>
            </View>
            </View>
            )
        }
    


const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    enterButtonText: {
        color: '#ffffff',
        fontSize: 30,
    },
    enterButton: {
        backgroundColor: '#0B71E0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: 150,
        position: 'relative',
        top: -40,
        right: -70,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, 
    },
    inputBox: {
        width: 300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        position: "relative",
        top: 20,
        color:'#ffffff',
        marginVertical: 10
        
    },
    loginbutton: {
        width:250,
        backgroundColor: "#034389",
        borderRadius: 25,
        marginVertical: 10,
        height: 30,
        position: "relative",
        top: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, 
    },
    signupbutton: {
        width:250,
        backgroundColor: "#034389",
        borderRadius: 25,
        marginVertical: 10,
        height: 30,
        position: "relative",
        top: 5,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1
    },

    buttonText: {
        fontSize: 22,
        fontWeight: '500',
        color: '#0493DB',
        textAlign: 'center',
        fontFamily: "GillSans-Bold",
        
        textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1

    },

    callstoaction: {
        color: "#ffffff",
        fontSize: 16,
        position: "relative",
        top: 5,
        textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1

    },

    signupcallstoaction: {
        color: "#ffffff",
        fontSize: 16,
        position: "relative",
        top: 5,
        textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1

    }
})