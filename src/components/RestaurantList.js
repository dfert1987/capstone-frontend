import React from 'react'
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

export default function RestaurantList({ restaurant }) {
    if(restaurant.mainCategory === "Food"){
        // console.log(restaurant.name)
    return(
        <View>
            <Text>{restaurant.name}</Text>
        </View>
    )
    }

}