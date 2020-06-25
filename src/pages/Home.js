import React, { Component } from 'react';
import {  
        ImageBackground, 
        StyleSheet, 
        View,
        Image,
        Text,
        TouchableOpacity
        } from 'react-native';
import Login from './Login.js';


export default class App extends Component{
    render() {
      return (
        <ImageBackground source={require('./bleonlyback.jpg')} style={styles.background}>
          <Image source={require('./blepnglogo.png')} style={styles.logo}></Image>
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
      width: '800%',
      position: "absolute",
      top:800
      
    },
    logo: {
      width: '90%',
      height: '50%',
      position: "absolute",
      right: 30,
      top: 50,
  }
  
  })