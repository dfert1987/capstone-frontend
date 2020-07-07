import React, { Component } from 'react';
import Swipeable from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation';

import {  
    StyleSheet, 
    View,
    Image,
    Text,
    ScrollView,
    ImageBackground,
    } from 'react-native';
import StadiumCards from '../components/StadiumCards.js';
import { Link } from "react-router-native";


    export default class StadiumsList extends Component{

        state = {
            stadiums: []
        }
        componentDidMount(){
            fetch('http://localhost:3000/stadia')
                .then(response => response.json())
                .then(result => this.controllerFunction(result)
            )
        }

        controllerFunction = (stadiums) => {
            this.setStadiums(stadiums)

        }

        setStadiums = (stadiums) => {
            this.setState(
                {stadiums: stadiums}

            )
        }

        showStadiumsCentral = () => this.state.stadiums.map(stadium => {
            if(stadium.division === "NL Central")
            return <StadiumCards key={stadium.id}
            stadium={stadium}
            navigation = {this.props.navigation}
            /> })
        
        showStadiumsWest = () => this.state.stadiums.map(stadium => {
            if(stadium.division === "NL West")
            return <StadiumCards key={stadium.id}
            stadium={stadium}
            navigation = {this.props.navigation}

            /> })

        render() {
          return (
            <ImageBackground source={require('./bluedogs.jpg')} style={styles.background}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.titleContainer}> 
                            <Text style={styles.titleText}>Choose a Stadium</Text>
                        </View>
                        <Image source={require('./nlcentnew.png')} style={styles.divisionHeader}></Image>
                        <View style={styles.cardContainer}>
                            {this.showStadiumsCentral()}
                        </View>
                        <Image source={require('./nlwest.png')} style={styles.divisionHeaderWest}></Image>
                        <View style={styles.cardContainer2}>
                            {this.showStadiumsWest()}
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
          ); 
        }
      }
      const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            alignContent: "center"
           
        },
        titleContainer: {
            alignItems: "center",
            top: 50
        },
        background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 400
          },
        titleText: {
            fontSize:35,
            fontFamily: "GillSans-Bold",
            textShadowColor: 'black',
            color: 'white',
            textShadowRadius: 5,
            position: 'relative',
            left: -5
        },
        cardContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign:"center",
        position: "relative",
        right: 5,
        top: 70,
        margin: 5
        },

        cardContainer2: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign:"center",
        position: "relative",
        top: 90,
        right: 5,
        margin: 4
            },

        divisionHeader:{
            height: 30,
            width: 250,
            position: "relative",
            top: 65,
            right: 60
        },
        divisionHeaderWest:{
            height: 30,
            width: 250,
            position: "relative",
            top: 85,
            right: 60
        },


        // background:{
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     width: 400,
        //     opacity:
        // }
      })