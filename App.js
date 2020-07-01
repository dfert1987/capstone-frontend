import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home.js';
import StadiumsList from './src/screens/StadiumsList.js';
import Navigator from './src/Routes.js'
import Icon from 'react-native-ionicons'


import {   
        StyleSheet, 
        View       
        } 
        from 'react-native';


const Stack = createStackNavigator();


export default class App extends Component{
  render() {
    return (
      <Navigator 
      screenOptions={{
        headerShown: false
      }}/>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
  

  }
})