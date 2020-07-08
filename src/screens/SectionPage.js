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

            matchSectionNumber = (currentSection, currentStadium, allRestaurants, navigation) => this.state.sections.map(section  => {
               
                if(section.number == currentSection)
                    return <GetSection
                        section = {section}
                        currentStadium = {currentStadium}
                        allRestaurants = {allRestaurants}
                        navigation = {navigation}
                        />})

        render(){
            const currentSection = this.props.navigation.state.params.chosenSection
            const currentStadium = this.props.navigation.state.params.chosenStadium[0]
            const allRestaurants = this.state.restaurants
            const navigation = this.props.navigation
          
                return(
                    <ImageBackground source={require('./pizzabg.png')} style={styles.background}>
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerWelcome}>Welcome to {currentStadium.name}</Text>
                            <Text style={styles.headerSection}>Section: {currentSection}</Text>
                            <View>
                                {this.matchSectionNumber(currentSection, currentStadium, allRestaurants, navigation)}
                            </View>
                        </View>
                    </ScrollView>
                    </ImageBackground>
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
            fontFamily: "GillSans-Bold",
            color: '#ffffff',
            top: 10,
            shadowColor: 'rgba(0,0,0, 1)', // IOS
            shadowOffset: { height: 3, width: 3 }, // IOS
            shadowOpacity: 1,
        },
        headerWelcome: {
            textAlign:"center",
            fontSize: 25,
            fontFamily: "GillSans-Bold",
            left: -12,
            color: '#ffffff',
            shadowColor: 'rgba(0,0,0, 1)', // IOS
            shadowOffset: { height: 3, width: 3 }, // IOS
            shadowOpacity: 1,
            top: 10
        },
        background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 400
          },
    })

