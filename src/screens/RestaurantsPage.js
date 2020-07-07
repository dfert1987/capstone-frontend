import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Image,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    } from 'react-native';
import GetReviews from '../components/GetReviews.js';



export default class StadiumsList extends Component{

    render(){
        const restaurant =this.props.navigation.state.params
        const restImage = restaurant.image

        return(
            <View>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>Category: {restaurant.subCategory}</Text>
                    <Image source={{uri: restImage}} 
                        style={{ width: 200, 
                        borderWidth: 2, 
                        borderColor: "#20232a",
                        height: 150, 
                        position: 'relative', 
                        top: 10, 
                        right: -95,  
                        padding: 2, 
                        shadowOffset: {width: 0, height: 3}, 
                        shadowRadius: 5, 
                        shadowOpacity: 1.0}}
                    />
                    <Text style={styles.reviewsHeader}>Reviews</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.addAReviewButton}>
                        <Text style={styles.buttonText}>Add A Review +</Text>
                    </TouchableOpacity>
                </View>
                    <View>
                        <GetReviews restaurant = {restaurant}/>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: 'GillSans-Bold',
        textAlign: "center",
        position: "relative",
        top: 5
    },
    subtitle: {
        fontFamily: "GillSans-Bold",
        textAlign: "center",
        position: 'relative',
        top: 5
    },
    reviewsHeader: {
        fontSize: 20,
        fontFamily: 'GillSans-Bold',
        top: 15,
        textAlign: 'center'
    },
    addAReviewButton: {
        position: 'relative',
        top: 20,
        right: -10,
        backgroundColor: "red",
        alignItems: "center",
        width: 130,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
    },
    buttonText:{
        fontFamily: "GillSans-Bold"
    }

})

