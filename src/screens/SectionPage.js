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

            matchSectionNumber = (currentSection, currentStadium,  navigation, allRestaurants) => this.state.sections.map(section  => {
                if(section.number == currentSection)
                    return <GetSection
                        section = {section}
                        currentStadium = {currentStadium}
                        navigation = {navigation}
                        allRestaurants= {allRestaurants}
                        />})

        render(){

            const currentSection = this.props.navigation.state.params.value
            const currentStadium = this.props.navigation.state.params.chosenStadium
            const allRestaurants = this.state.restaurants
            const navigation = this.props.navigation
          
                return(
                    <ImageBackground source={require('./pizzabg.png')} style={styles.background}>
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerWelcome}>Welcome to {currentStadium.name}</Text>
                            <Text style={styles.headerSection}>Section: {currentSection}</Text>
                            <View style={styles.contentContainer}>
                                {this.matchSectionNumber(currentSection, currentStadium, navigation, allRestaurants)}
                            </View>
                        </View>
                    </ScrollView>
                    </ImageBackground>
                    )
                }
            }    
        
    const styles = StyleSheet.create({
        headerContainer: {
            left: -60
         
        },
        contentContainer:{
            left: 60
        },
        headerSection:{
            textAlign: "center",
            
            fontSize: 18,
            fontFamily: "GillSans-Bold",
            color: '#ffffff',
            top: 18,
            left: 48,
            marginBottom: 10,
            shadowColor: 'rgba(0,0,0, 1)', // IOS
            shadowOffset: { height: 3, width: 3 }, // IOS
            shadowOpacity: 1,
        },
        headerWelcome: {
            textAlign:"center",
            fontSize: 25,
            fontFamily: "GillSans-Bold",
            left: 48,
            color: '#ffffff',
            shadowColor: 'rgba(0,0,0, 1)', // IOS
            shadowOffset: { height: 3, width: 3 }, // IOS
            shadowOpacity: 1,
            top: 18
        },
        background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 400
          },
    })

