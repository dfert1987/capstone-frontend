import React, { Component } from 'react';
import {  
    ImageBackground, 
    StyleSheet, 
    View,
    Image,
    Text,
    TouchableOpacity
    } from 'react-native';
import StadiumCards from '../components/StadiumCards.js'

    

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

        showStadiums = () => this.state.stadiums.map(stadium => {
            return <StadiumCards stadium={stadium}/> })

        render() {
          return (
            <View style={styles.container}>
                <View style={styles.titleContainer}> 
                    <Text style={styles.titleText}>Choose a Stadium</Text>
                </View>
                <View style={styles.container}>
                    {this.showStadiums()}
                </View>
            </View>
          );
        }
      }

      const styles = StyleSheet.create({
        container: {
            flex:1
        },
        titleContainer: {
            alignItems: "center",
            flex: 1,
            top: 50
        },
        titleText: {
            fontSize:30
        }
      })