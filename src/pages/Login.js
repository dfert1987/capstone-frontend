import React, { Component } from 'react';
import {  
        StyleSheet, 
        View,
        Text,
        TouchableOpacity

        } from 'react-native';
import Form from '../components/Form.js';



export default class Login extends Component {


    render() {
        return (
            <View style={styles.loginContainer}>             
                <Form type={"Login"}/>
                <View style={styles.signupTextCont}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
    backgroundColor:'rgba(15,105,189,.8)',
    alignItems:'center',
    justifyContent :'center',
    height: 210,
    width: 320,
    top: 205,
    right: 10,
    borderRadius: 8,
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        position: "relative",
        top: 0,
        flexDirection:'row'
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    loginCall: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
        fontFamily:'Helvetica',
        position: "relative",
        top: 48
    }
})


