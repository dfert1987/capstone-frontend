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
import ReviewCard from './ReviewCard.js'

export default class StadiumsList extends Component{

    state = {
        reviews: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/reviews')
                .then(response => response.json())
                .then(result => this.controllerFunction(result))
        }
    
    controllerFunction = (reviews) => {
        this.setReviews(reviews)
    }

    setReviews = ( reviews ) => {
        this.setState(
            {reviews: reviews}
        )
    }

    showReviews = () => this.state.reviews.map(review => {
        const thisRestaurant =this.props.restaurant
        if(thisRestaurant.id === review.restaurant.id){
            return(
                <ReviewCard 
                    review = {review}
                />
            )
        }
    })

    

    render(){
        return(
            <View>
                <View>
                    {this.showReviews()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})