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
            <ImageBackground source={require('./bluetexture.jpeg')} style={styles.cardbg}>
            <Text style={styles.cardTitle}>{stadium.name}</Text>
            <Image source={{uri: imageUrl}} style={{ width: 100, height: 100, position: 'relative', top: 5, right: -25}}></Image>
            <TouchableOpacity
             onPress={() => navigation.navigate(
            'StadiumMap',{ stadium })}
            style={styles.stadiumButton}>
                    <Text style={styles.buttonText}>View Stadium</Text>
            </TouchableOpacity>
            </ImageBackground>
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
        backgroundColor: "blue",
        elevation: 3,
        shadowRadius: 2,
        shadowColor: '#333',
        shadowOpacity: 0.3
    },
    cardbg: {
        width: '100%'
    },

    stadiumButton: {
    backgroundColor: "#FFFFFF",
    width: 100,
    height: 30,
    alignItems: "center",
    position: 'relative',
    right: -25,
    justifyContent:"center"
    },
    buttonText:{
    fontFamily: 'GillSans-Bold',
    fontSize: 13

    },
    cardTitle: {    
        alignContent: "center",
        alignItems: "center",
        fontFamily: 'GillSans-Bold',

        color: "#ffffff",
        textAlign:"center",
        position: 'relative',
        top: 3
    },
    cardImg: {
        height: 30,
        marginTop: 20,
        position: 'absolute',
        right: 80
        },

    cardStats: {
        fontSize: 14,
        position: 'relative',
        top: 10,
        fontFamily: 'GillSans-Bold',
        color: "#ffffff",
        
    }
  })


