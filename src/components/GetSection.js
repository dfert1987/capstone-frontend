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



export default function GetSection ({ section, currentStadium, allRestaurants, navigation }) {
   let sectionImage = section.image

    // handlePress = (navigation) => {
    //     navigation.navigate('AddARestaurantPage')

    // }
    // onPress={() => this.props.navigation.navigate(
    //     'SectionPage', this.state, )}
    //     style={styles.button}
        if(section.stadium_id === currentStadium.id) {
    return (
        <View >
                <Image source={{uri: sectionImage}} style={{ width: 300, borderWidth: 2, borderColor: "#20232a",height: 150, position: 'relative', top: 7, right: -37,  padding: 2, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}></Image>
                <TouchableOpacity onPress={() => navigation.navigate(
                    'AddARestaurantPage', section, allRestaurants, currentStadium 
                    )}
                style={styles.addVendorButton}>
                    <Text style={styles.buttonText}>+ Add A Vendor</Text>
                </TouchableOpacity>
                <View>
                    <GetRestaurants
                    allRestaurants = {allRestaurants}
                    section = {section}
                    currentStadium = {currentStadium}
                    navigation = {navigation}
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
    addVendorButton:{
        backgroundColor: '#0B71E0',
        height: 30,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'relative',
        top: 20,
        right: -130,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, 
    },
    buttonText: {
        fontFamily: "GillSans-Bold",

    }
})