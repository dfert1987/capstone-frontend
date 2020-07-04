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

export default function GetRestaurants({section, allRestaurants }) {
    const sectionId = section.id

    findRestaurants = () => allRestaurants.map(restaurant => {
        if(restaurant.section.id === sectionId && restaurant.mainCategory === "Food")  {
            const restImage = restaurant.image
            console.log(restImage)
            return(
                <TouchableOpacity style={styles.restaurantButtons}>
                    <Text style={styles.restaurantName}> {restaurant.name}</Text>
                    <Image source={{uri: restImage}} style={{ width: 200, borderWidth: 2, borderColor: "#20232a",height: 150, position: 'relative', top: -15, right: -95,  padding: 2, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}/>
                    <Text style={styles.restaurantCategory}>Type: {restaurant.subCategory}</Text>
                    <View>
                        {showStars(restaurant)}
                    </View>
                </TouchableOpacity>
                )
            }
        })

    findBar = () => allRestaurants.map(restaurant => {
        if(restaurant.section.id === sectionId && restaurant.mainCategory === "Drink") {
            const restImage = restaurant.image
            return(
                <TouchableOpacity style={styles.barButtons}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <Image source={{uri: restImage}} style={{ width: 200, borderWidth: 2, borderColor: "#20232a",height: 150, position: 'relative', top: -15, right: -95,  padding: 2, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}/>
                    <Text style={styles.barCategory}>Type: {restaurant.subCategory}</Text>
                    <View>
                        {showStars(restaurant)}
                    </View>
                </TouchableOpacity>
            )
        }
    })
    showStars = (restaurant) => {
        if(restaurant.stars > 4.5) {
            return(
                <View style={styles.stars}>
                    <Image source={require('./5stars.png')}/>
                </View>
            )
        } else if((restaurant.stars < 4.5) && (restaurant.stars > 3.5)) {
            return(
                <View style={styles.stars}>
                    <Image source={require('./4starnew.png')}/>
                </View>
            )
        } else if((restaurant.stars < 3.5) && (restaurant.stars > 2.5)) {
            return(
                <View style={styles.stars}>
                    <Image source={require('./3starnew.png')} />
                </View>
            )
        } else if ((restaurant.stars < 2.5) && (restaurant.stars > 1.5)) {
            return(
                <View style={styles.stars}>
                    <Image source={require('./2star.png')} />
                </View>
            )
        } else {
            return(
                <View style={styles.stars}>
                    <Image source={require('./1starpng.png')} />
                </View>
            )
        }
}


    return (
      
        <View style={styles.foodSection}>
            <Text style={styles.foodHeader}>Food</Text>
            <View style={styles.restCont}>
                {findRestaurants()}
            </View>
            
      
            <Text style={styles.drinkHeader}>Drink</Text>
            <View style={styles.restCont}>
                {findBar()}
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
            position: 'relative',
            right: 10,
            top: -8,
            color: "white"
           
        },
        drinkHeader: {
            fontSize: 40,
            fontFamily: "GillSans-Bold",
            position: "relative",
            right: -3
        },
        restaurantButtons: {
            backgroundColor: "blue",
            margin: 10,
            borderWidth: 2, 
            borderColor: "#20232a",
            width: '100%'

        },

        barButtons: {
            backgroundColor: "blue",
            margin: 10,
            borderWidth: 2, 
            borderColor: "#20232a",
            width: '100%'
        },
        restaurantCategory: {
            textAlign: "center",
            position: 'relative',
            right: -9,
            top: -4,
            color: "white",
            fontSize: 16,
            fontFamily: "GillSans-Bold"

        },
        barCategory: {
            textAlign: "center",
            position: 'relative',
            right: -9,
            top: -4,
            color: "white",
            fontSize: 16,
            fontFamily: "GillSans-Bold"
        },
        stars: {
            alignItems: "center",
            position: "relative",
            right: -15
        }
    })
