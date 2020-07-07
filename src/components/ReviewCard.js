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

export default class ReviewCard extends Component{

    starPics =(stars) => {

        if(stars > 4.5) {
            return(
                <View style={styles.stars}>
                    <Text>Poo</Text>
                    <Image source={require('./5stars.png')}/>
                </View>
            )
        } else if((stars< 4.5) && (stars > 3.5)) {
            return(

                <View>
                    <Image 
                    source={require('./4starnew.png')}
                    style={styles.stars}
                    />
                </View>
            )
        } else if((stars < 3.5) && (stars > 2.5)) {
            return(
                <View >
                    <Image 
                    style={styles.stars}
                    source={require('./bluedogs.jpg')} />
                </View>
            )
        } else if ((stars < 2.5) && (stars > 1.5)) {
            return(
                <View>
                    <Image
                    style={styles.stars}
                    source={require('./2star.png')}
                    />
                </View>
            )
        } else {
            return(
                <View>
                    <Image 
                    style={styles.stars}
                    source={require('./1starpng.png')}
                    />
                </View>
            )
        }
    }


    render(){

        const review = this.props.review
        const reviewThumb = review.image
        const stars = review.stars

        
        return(
            <View style={styles.cardContainer}>
                <View style={styles.imageAndText}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: reviewThumb }}
                            style={{ width: 90, 
                            borderWidth: 2, 
                            borderColor: "#20232a",
                            height: 90, 
                            position: 'relative', 
                            top: 0, 
                            right: 0,  
                            padding: 2, 
                            shadowOffset: {width: 0, height: 3}, 
                            shadowRadius: 5,
                            marginLeft: 15,
                            marginRight: 10, 
                            shadowOpacity: 1.0}}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>"{review.title}"</Text>
                        <View style={styles.stars}>
                            {this.starPics(stars)}
                        </View>
                        <Text style={styles.user}>-{review.user}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        position: "relative",
        top: 30,
        marginBottom: 20,
        borderWidth: 2,
    },
    title: {
        fontFamily: "GillSans-Bold",
        fontSize: 18,
        position: "relative",
        top: 3,
        textAlign: "center",
        fontStyle: "italic"
    },
    imageAndText: {
        flexDirection: 'row'
    },
    stars: {
        alignItems: "center",
        position: "relative",
        height: 50,
        top: 3
    },
    content: {
        flexDirection: 'column'
    },
    user: {
        top: 2,
        textAlign: 'right',
        fontStyle: 'italic'
    }
})