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

export default function GetRestaurants({section, allRestaurants, navigation }) {
    const sectionId = section.id

    findRestaurants = () => allRestaurants.map(restaurant => {
        if(restaurant.section.id === sectionId && restaurant.mainCategory === "Food")  {
            const restImage = restaurant.image
            const key = restaurant.id
            return(
                <TouchableOpacity 
                    style={styles.restButton}
                    onPress={() => 
                    navigation.navigate(
                    'RestaurantsPage', 
                    restaurant,
                    key   
                )}
                 style={styles.restaurantButtons}>
                    <Text style={styles.restaurantName}> {restaurant.name}</Text>
                    <View>
                    <Image source={{uri: restImage}} style={{ width: 100, borderWidth: 2, borderColor: "#20232a",height: 100, left: 40, position: 'relative', top: -21,    shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}/>
                    </View>
                    <Text style={styles.restaurantCategory}>{restaurant.subCategory}</Text>
                    <View style={styles.priceCont}>
                        {showPrice(restaurant)}
                    </View>
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
            const key = restaurant.id
            return(
                <TouchableOpacity onPress={() => navigation.navigate(
                    'RestaurantsPage', restaurant, key
                )}
                style={styles.barButtons}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <Image source={{uri: restImage}} style={{ width: 100, borderWidth: 2, borderColor: "#20232a",height: 100, position: 'relative', top: -20, right: -40,  padding: 2, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}/>
                    <Text style={styles.barCategory}>{restaurant.subCategory}</Text>
                    <View style={styles.priceCont}>
                        {showPrice(restaurant)}
                    </View>
                    <View >
                        {showStars(restaurant)}
                    </View>
                </TouchableOpacity>
            )
        }
    })


    showStars = (restaurant) => {
        if(restaurant.stars > 4.5) {
            return(
                <View style={styles.starRating}>
                    <Text style={styles.rating}>Rating:</Text>
                    <Image style={styles.stars} source={require('./5stars.png')}/>
                </View>
            )
        } else if((restaurant.stars < 4.5) && (restaurant.stars > 3.5)) {
            return(
                <View style={styles.starRating}>
                    <Text style={styles.rating}>Rating:</Text>
                    <Image style={styles.stars} source={require('./4starnew.png')}/>
                </View>
            )
        } else if((restaurant.stars < 3.5) && (restaurant.stars > 2.5)) {
            return(
                <View style={styles.starRating}>
                    <Text style={styles.rating}>Rating:</Text>
                    <Image style={styles.stars} source={require('./3starnew.png')} />
                </View>
            )
        } else if ((restaurant.stars < 2.5) && (restaurant.stars > 1.5)) {
            return(
                <View style={styles.starRating}>
                    <Text style={styles.rating}>Rating:</Text>
                    <Image style={styles.stars} source={require('./2star.png')} />
                </View>
            )
        } else {
            return(
                <View style={styles.starRating}>
                    <Text style={styles.rating}>Rating:</Text>
                    <Image style={styles.stars} source={require('./1starpng.png')} />
                </View>
            )
        }
}
showPrice = (restaurant) => {
    if(restaurant.cost === 5){
        return(
            <View style={styles.costContainer}>
                <Text style={styles.cost}>Cost:</Text>
                <Text style={styles.dollarSigns}>$$$$$</Text>
            </View>
        )
    } else if(restaurant.cost === 4) {
        return(
        <View style={styles.costContainer}>
            <Text style={styles.cost}>Cost:</Text>
            <Text style={styles.dollarSigns}>$$$$</Text>
        </View>
        )
    } else if(restaurant.cost === 3) {
        return(
        <View style={styles.costContainer}>
            <Text style={styles.cost}>Cost:</Text>
            <Text style={styles.dollarSigns}>$$$</Text>
        </View>
        )
    } else if(restaurant.cost === 2) {
        return (
        <View style={styles.costContainer}>
            <Text style={styles.cost}>Cost:</Text>
            <Text style={styles.dollarSigns}>$$</Text>
        </View>
        )
    } else {
        return (
            <View style={styles.costContainer}>
                <Text style={styles.cost}>Cost:</Text>
                <Text style={styles.dollarSigns}>$</Text>
            </View> 
        )
    }
}

    return (
      
        <View style={styles.foodSection}>
            <Text style={styles.foodHeader}>Food</Text>
            <Text style={styles.restOnBoarding}>Click vendor to see reviews</Text>
            <View style={styles.restCont}>
                {findRestaurants()}
            </View>
            
      
            <Text style={styles.drinkHeader}>Drink</Text>
            <Text style={styles.barOnBoarding}>Click vendor to see reviews</Text>
            <View style={styles.restCont}>
                {findBar()}
            </View>
        </View>
        )
    }


    const styles = StyleSheet.create({
        foodHeader:{
            fontSize: 40,
            top: -25,
            fontFamily: "GillSans-Bold",
            position: "relative",
            right: -3,
            color: "#ffffff",
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1,
        },
        rating: {
            fontFamily: 'GillSans-Bold',
            color: '#ffffff',
            right: -240,
            top: -95, 
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1,
            fontSize: 16

        },
        foodSection: {
            position: "relative",
            top: 45,   
        },
        restaurant:{
            fontFamily: "GillSans-Bold",
            textAlign: "center",
        },
        restOnBoarding:{
            fontSize: 16,
            position: "relative",
            right: -5,
            top: -25,
            fontFamily: 'GillSans-Bold',
            color: '#ffffff',
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1
        },

        barOnBoarding:{
            fontSize: 15,
            position: "relative",
            right: -5,
            top: -3
        },

        restCont: {
            alignItems:"center",
            justifyContent: "space-between"
        },
        restaurantName: {
            width: '100%',
            fontFamily: "GillSans-Bold",
            fontSize: 17,
            textAlign: 'center',
            position: 'relative',
            right: -70,
            top: 0,
            color: '#ffffff',
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1,
       
        },
        drinkHeader: {
            fontSize: 40,
            fontFamily: "GillSans-Bold",
            position: "relative",
            right: -3
        },
        restaurantButtons: {
            borderBottomWidth: 1, 
            borderColor: "#20232a",
            width: '100%',
            position: "relative",
            height: 100,
            left: 0,
            top: -20,
            backgroundColor: 'rgba(52, 52, 52, 0.3)'
        },
        cost: {
            left: 220,
            fontSize: 16,
            fontFamily: 'GillSans-Bold',
            color: "#ffffff",
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1,
            fontSize: 16
        },
        dollarSigns: {
            left: 290,
            top: -23,
            fontSize: 24
        },
        barButtons: {
            backgroundColor: 'rgba(52, 52, 52, 0.3)',
            borderBottomWidth: 1, 
            borderColor: "#20232a",
            width: '100%',
            height: 100
        },
        restaurantCategory: {
            position: 'relative',
            textAlign: 'center',
            top: -98,
            fontSize: 14,
            right: -70,
            fontFamily: "GillSans-Bold",
            color: '#ffffff',
            fontStyle: 'italic',
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1

        },
        starRating: {
            flexDirection: 'row',
            top: -46,
            right: 67,

        },
        priceCont: {
            flexDirection: 'row',
            top: -65,
            right: 40
        },
        barCategory: {
            textAlign: "center",
            position: 'relative',
            right: -70,
            top: -100,
            fontSize: 14,
            fontFamily: "GillSans-Bold",
            fontStyle: 'italic',
            color: '#ffffff',
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1
        },

        stars: {
            alignContent: "center",
            position: "relative",
            right: -250,
            top: -103,
            height: 40,
            width: 110,
            shadowColor: 'rgba(0,0,0, .9)', // IOS
            shadowOffset: { height: 3, width: 3 }, // IOS
            shadowOpacity: 1,
            fontSize: 16
        },

        background: {

        },
        restCont: {
            left: -40
        }
    })
