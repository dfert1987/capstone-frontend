import React from 'react'
import styled from 'styled-components'

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
import GetRestaurants from './GetRestaurants.js'

export default function GetSection ({ section, currentStadium,  navigation, allRestaurants }) {
   let sectionImage = section.image

        if(section.stadium_id === currentStadium.id) {
    return (
        <View >
                <Image source={{uri: sectionImage}} style={{ width: 300, borderWidth: 2, borderColor: "#20232a",height: 150, position: 'relative', top: 20, right: -27,  padding: 2, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}></Image>
                <TouchableOpacity onPress={() => navigation.navigate(
                    'AddARestaurantPage', section, allRestaurants, currentStadium 
                    )}
                style={styles.addVendorButton}>
                    <Text style={styles.buttonText}>+ Add A Vendor</Text>
                </TouchableOpacity>
                <View style={styles.restoCont}>
                    <GetRestaurants 
                    section = {section}
                    currentStadium = {currentStadium}
                    navigation = {navigation}
                    allRestaurants = {allRestaurants}
                     />
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    
    sectionImage: {
        flex: 1
    },
    foodHeader: {
        position: "relative",
        top: 20,
        right: -10, 
        fontFamily: "GillSans-Bold",
        fontSize: 30,
        color: "blue",
        
    },
    drinkHeader:{
        position: "relative",
        top: 100, 
        right: -10,
        fontFamily: "GillSans-Bold",
        fontSize: 30,
        color: "blue"
    },
    restoCont:{
        width: 375
    },
    addVendorButton:{
        backgroundColor: '#034389',
        height: 30,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'relative',
        top: 30,
        right: -110,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, 
    },
    buttonText: {
        fontFamily: "GillSans-Bold",
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1,

    }
})