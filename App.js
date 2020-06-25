import React, { Component } from 'react';
import {   
        StyleSheet, 
        View,
        Text,
        ImageBackground
        } from 'react-native';
import Home from './src/pages/Home.js';



export default class App extends Component{
  render() {
    return (
        <View style={styles.container}> 
          <Home/> 
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})