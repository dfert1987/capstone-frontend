import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Image,
    Text,
    ScrollView,
    ImageBackground,
    } from 'react-native';
import GetSection from '../components/GetSection.js';



    export default class SectionsPage extends Component{

        state = {
            sections: []
        }
       
            componentDidMount(){
                fetch('http://localhost:3000/sections')
                    .then(response => response.json())
                    .then(sections => this.controllerFunction(sections))
            }

            controllerFunction = (sections) => {
                this.setSectionState(sections)
            }

            setSectionState = (sections) => {
                this.setState(
                    {sections: sections}
                )
            }

            matchSectionNumber = (currentSection, currentStadium) => this.state.sections.map(section  => {
                if(section.number == currentSection)
                    return <GetSection
                        section = {section}
                        currentStadium = {currentStadium}
                        />})
                
                

        render(){
            const currentSection = this.props.navigation.state.params.chosenSection
            // console.log(currentSection)
            const currentStadium = this.props.navigation.state.params.chosenStadium[0]
            // console.log(currentStadium)
            // console.log(currentSection)
            // const currentStadium = currentStadiumArray[0]
            // if (currentStadium) {
              return(
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerWelcome}>Welcome to {currentStadium.name}</Text>
                        <Text style={styles.headerSection}>Section: {currentSection}</Text>
                        <View>
                            {this.matchSectionNumber(currentSection, currentStadium)}
                        </View>
                    </View>
                    )
                }
            }
        // }       
        
    const styles = StyleSheet.create({
        headerContainer: {
            alignContent: "center"

        },
        headerSection:{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "GillSans-Bold"
        },
        headerWelcome: {
            textAlign:"center",
            fontSize: 25,
            fontFamily: "GillSans-Bold"
        }
    })

