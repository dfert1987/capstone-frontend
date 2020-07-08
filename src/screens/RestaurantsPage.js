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
            <ImageBackground 
                source={require('./friesbg.png')} 
                style={styles.background}>
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
                        top: -30, 
                        right: -75,  
                        padding: 2, 
                        shadowOffset: {width: 0, height: 3}, 
                        shadowRadius: 5, 
                        shadowOpacity: 1.0,
                        shadowColor: 'rgba(0,0,0, 3)', // IOS
                        shadowOffset: { height: 3, width: 3 }, // IOS
                        shadowOpacity: 1,
                        }}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.addAReviewButton}>
                        <Text style={styles.buttonText}>Add A Review +</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headSub}>
                    <Text style={styles.reviewsHeader}>Reviews</Text>
                    <Text style={styles.reviewsOnboarding}>Tap to see full review</Text>
                </View>
                    <View style={styles.reviews}>
                        <GetReviews restaurant = {restaurant}/>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontFamily: 'GillSans-Bold',
        textAlign: "center",
        position: "relative",
        top: -40,
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0, .9)', // IOS
        shadowOffset: { height: 5, width: 5 }, // IOS
        shadowOpacity: 1
    },
    subtitle: {
        fontFamily: "GillSans-Bold",
        textAlign: "center",
        position: 'relative',
        top: -40,
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0, 1)', // IOS
        shadowOffset: { height: 4, width: 4 }, // IOS
        shadowOpacity: 1,
        fontSize: 16
        
    },
    headSub:{
        top:11,
        left: -20
    },
    reviewsHeader: {
        fontSize: 20,
        fontFamily: 'GillSans-Bold',
        top: 13,
        position: 'relative',
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0, .9)', // IOS
        shadowOffset: { height: 5, width: 5 }, // IOS
        shadowOpacity: 1,
        
    },
    reviewsOnboarding: {
        fontFamily: 'GillSans-Bold',
        fontStyle: 'italic',
        top: 11,
        textAlign: 'left',
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0, .9)', // IOS
        shadowOffset: { height: 5, width: 5 }, // IOS
        shadowOpacity: 1,
        fontSize: 14

    },
    addAReviewButton: {
        position: 'relative',
        top: -20,
        alignSelf: 'center',
        backgroundColor: "#034389",
        alignItems: "center",
        width: 130,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .8)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1,
        },
    buttonText:{
        fontFamily: "GillSans-Bold",
        color: '#ffffff'
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 600
      },
    reviews:{
        
    }

})

