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
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> password.focus()}
                />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#ffffff"
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
        backgroundColor: "red",
        borderRadius: 25,
        marginVertical: 10,
        height: 30,
        position: "relative",
        top: 10
    },
    signupbutton: {
        width:250,
        backgroundColor: "red",
        borderRadius: 25,
        marginVertical: 10,
        height: 30,
        position: "relative",
        top: 5
    },

    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

    callstoaction: {
        color: "#ffffff",
        fontSize: 16,
        position: "relative",
        top: 5
    },

    signupcallstoaction: {
        color: "#ffffff",
        fontSize: 16,
        position: "relative",
        top: 5
    }
})