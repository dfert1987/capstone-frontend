import React from 'react'
import { withNavigation } from 'react-navigation';
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




export default function StadiumCards({stadium, navigation}) {
    let imageUrl = stadium.image
    
    return (
        
        <View style={styles.card}>
            {/* <ImageBackground source={require('./bluetexture.jpeg')} style={styles.cardbg}> */}
            <Text style={styles.cardTitle}>{stadium.name}</Text>
            <View style={styles.imageContainer}>
                <Image source={{uri: imageUrl}} style={{ width: 173, height: 150, position: 'relative', top: -16, right: 0}}></Image>
            </View>
            <TouchableOpacity
             onPress={() => navigation.navigate(
            'StadiumMap',{ stadium })}
            style={styles.stadiumButton}>
                    <Text style={styles.buttonText}>{stadium.name}</Text>
            </TouchableOpacity>
            {/* </ImageBackground> */}
        </View>  
    )}   

const styles = StyleSheet.create({
    card: {
        width: "50%",
        marginRight: 0,
        height: 170,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        elevation: 3,
        borderWidth:1,
        borderRadius: 0,
        
  },
 imageContainer:{
   
          
 },
    cardbg: {
        width: '100%'
    },

    stadiumButton: {
    backgroundColor: "#67B6DE",
    width: '100%',
    height: 29,
    alignItems: "center",
    position: 'relative',
    right: 0,
    borderRadius: 1,
    justifyContent:"center",
    top: -29,
    },
    buttonText:{
    fontFamily: 'GillSans-Bold',
    fontSize: 17,
    color: "#034389",
    textShadowColor: '#ffffff', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1


    },
    // cardTitle: {    
    //     alignContent: "center",
    //     alignItems: "center",
    //     fontFamily: 'GillSans-Bold',
    //     color: "#67B6DE",
    //     textAlign:"center",
    //     position: 'relative',
    //     top: 5
    // },
    cardImg: {
        height: 30,
        marginTop: 20,
        position: 'relative',
        right: 20,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1
        },

    cardStats: {
        fontSize: 14,
        position: 'relative',
        top: 10,
        fontFamily: 'GillSans-Bold',
        color: "#ffffff",
        
    }
  })


