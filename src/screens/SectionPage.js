import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Image,
    Text,
    ScrollView,
    ImageBackground,
    } from 'react-native';



    export default class SectionsPage extends Component{

            // componentDidMount(){
            //     fetch(`http://localhost:3000/`)
            //         .then(response => response.json())
            //         .then(result => this.controllerFunction(result)
            //     )
            // }
        render(){

            const currentSection = this.props.navigation.state.params.chosenSection
            const currentStadium = this.props.navigation.state.params.chosenStadium

            if(currentStadium){
                console.log(currentStadium)
                return(
                    <View>
                        <Text>{currentStadium[0].name}</Text>
                        <Text></Text>
                    </View>
                )
                }
    }}
          
    // return(
    //             <View>
    //                 <Text>{currentSection}</Text>
                   
    //             </View>
    //         )
    //     }
    // }
        
