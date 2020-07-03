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
import RestaurantList from './RestaurantList.js'

export default function GetRestaurants({section, allRestaurants }) {
    const sectionId = section.id

    findRestaurants = () => allRestaurants.map(restaurant => {
        if(restaurant.section.id === sectionId && restaurant.mainCategory === "Food")  {
            return(
                // <Text>Food</Text>
            <Text style={styles.restaurantName}> {restaurant.name}</Text>
            )
        }
    })

    return (
      
        <View style={styles.foodSection}>
            <Text style={styles.foodHeader}>Food</Text>
            <View style={styles.restCont}>
                {findRestaurants()}
            </View>
            <View>
                <Text style={styles.drinkHeader}>Drink</Text>
            </View>

        </View>
        )
    }


    const styles = StyleSheet.create({
        foodHeader:{
            fontSize: 40,
            top: 10,
            fontFamily: "GillSans-Bold",
            position: "relative",
            right: -3
        },
        foodSection: {
            position: "relative",
            top: 45,
             
        },
        restaurant:{
            fontFamily: "GillSans-Bold",
            textAlign: "center",
           
        },
        restCont: {
            alignItems:"center",
            justifyContent: "space-between"
           
        },
        restaurantName: {
            margin: 20,
            width: '100%',
            fontFamily: "GillSans-Bold",
            fontSize: 25,
            textAlign: 'center',
            borderWidth: 2, 
            borderColor: "#20232a"
        },
        
    })
