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
// import GetRestaurants from '../components/GetRestaurants/js';



    export default class SectionsPage extends Component{

        state = {
            sections: [],
            restaurants: []
        }
        
            componentDidMount(){
                this.fetchSections()
                this.fetchRestaurants()
            }

            fetchRestaurants = () => {
                fetch('http://localhost:3000/restaurants')
                    .then(response => response.json())
                    .then(restaurants => this.restaurantControllerFunction(restaurants))
            }

            fetchSections = () => {
                fetch('http://localhost:3000/sections')
                    .then(response => response.json())
                    .then(sections => this.controllerFunction(sections))
            }

            controllerFunction = (sections,) => {
                this.setSectionState(sections)
            }

            restaurantControllerFunction = (restaurants) => {
                this.setRestaurantState(restaurants)
            }

            setSectionState = (sections) => {
                this.setState(
                    {sections: sections}
                )
            }

            setRestaurantState = (restaurants) => {
                this.setState(
                    {restaurants: restaurants}
                )
            }

            matchSectionNumber = (currentSection, currentStadium, allRestaurants) => this.state.sections.map(section  => {
                if(section.number == currentSection)
                    return <GetSection
                        section = {section}
                        currentStadium = {currentStadium}
                        allRestaurants = {allRestaurants}
                        />})

            // callRestaurants = (currentSection, currentStadium) => this.state.sections.map(section => {
            //     if(section.number == currentSection)
            //         return <GetRestaurants
            //             section = {section}
            //             currentStadium = {currentStadium}
            //             allRestaurants = {this.state.restaurants}
            //             />
            // })
                
                

        render(){
            // console.log(this.state.restaurants)
            const currentSection = this.props.navigation.state.params.chosenSection
            const currentStadium = this.props.navigation.state.params.chosenStadium[0]
            const allRestaurants = this.state.restaurants
          
              return(
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerWelcome}>Welcome to {currentStadium.name}</Text>
                        <Text style={styles.headerSection}>Section: {currentSection}</Text>
                        <View>
                            {this.matchSectionNumber(currentSection, currentStadium, allRestaurants)}
                        </View>
                    </View>
                    )
                }
            }    
        
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

