import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Image,
    Text,
    Button,
    TouchableOpacity,
    ImageBackground,
    } 
from 'react-native';
import { render } from 'react-dom';

export default function StarRating ({ stars }) {
    console.log(stars)


  return (
      <View>
      {starPics()}
      </View>
    )

}
    
    