import React, { Component } from 'react';
import {  
        ImageBackground, 
        StyleSheet, 
        View,
        Image,
        Text,
        TouchableOpacity,
        Button,
        } from 'react-native';
import Login from './Login.js';


export default class App extends Component{

   handlePress = (navigation) => {
    this.props.navigation.navigate('StadiumsList')
  }
  
    render() {
      return (
        <ImageBackground source={require('./bleonlyback.jpg')} style={styles.background}>
          <Image source={require('./blepnglogo.png')} style={styles.logo}></Image>
          <TouchableOpacity onPress={this.handlePress} style={styles.buttonEnter}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
          <View> 
            <Login style={styles.login}/>
          </View>
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 400
    },
  
    login: { 
      width: '80%',
      position: "relative",
      marginBottom: 50
    },

    logo: {
      width: '90%',
      height: '50%',
      position: "relative",
      right: 10,
      top: 10,
      
  },
  buttonEnter: {
    backgroundColor: '#034389',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: 150,
        height: 40,
        position: 'relative',
        fontFamily: 'GillSans-Bold',
        top: 10,
        right: 5,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, 
  },
    buttonText: {
      color: "#0493DB",
      fontSize: 25,
      fontFamily: 'GillSans-Bold',
      textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1
     
    }
  })