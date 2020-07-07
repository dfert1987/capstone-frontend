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
                <Image source={{uri: imageUrl}} style={{ width: 100, height: 100, position: 'relative', top: 12, right: 0,  shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}></Image>
            </View>
            <TouchableOpacity
             onPress={() => navigation.navigate(
            'StadiumMap',{ stadium })}
            style={styles.stadiumButton}>
                    <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            {/* </ImageBackground> */}
        </View>  
    )}   

const styles = StyleSheet.create({
    card: {
        width: "40%",
        alignContent: "center",
        alignItems: "center",
        marginLeft: 9,
        marginRight: 20,
        marginBottom: 10,
        height: 170,
        borderRadius: 5,
        backgroundColor: "#034389",
        elevation: 3,
        shadowRadius: 2,
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
 imageContainer:{
    shadowRadius: 2,
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
          }
 },
    cardbg: {
        width: '100%'
    },

    stadiumButton: {
    backgroundColor: "#67B6DE",
    width: 100,
    height: 30,
    alignItems: "center",
    position: 'relative',
    right: 0,
    borderRadius: 3,
    justifyContent:"center",
    top: 12
    },
    buttonText:{
    fontFamily: 'GillSans-Bold',
    fontSize: 18,
    color: "#034389",
    textShadowColor: '#ffffff', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1


    },
    cardTitle: {    
        alignContent: "center",
        alignItems: "center",
        fontFamily: 'GillSans-Bold',
        color: "#67B6DE",
        textAlign:"center",
        position: 'relative',
        top: 5
    },
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


