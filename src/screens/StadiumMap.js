import React, { Component } from 'react';
import {
StyleSheet, 
View,
Image,
Text,
Button
} 
from 'react-native';


class StadiumMap extends Component {
    
    render() {
        const stadium = this.props.navigation.state.params.stadium
        if(stadium) {
            return (
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.stadiumName}>{stadium.name}</Text>
                    </View>
                    <View styel={styles.mainContainer}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoHeader}>Stadium Info</Text>
                            <Text>City: {stadium.city}</Text>
                            <Text>Team: {stadium.team}</Text>
                            <Text>Capacity: {stadium.capacity}</Text>
                        </View>
                        <Image  style={styles.map} source={require('./wrigley.png')} />
                        <Image style={styles.sections} source={require('./smallsections.png')}/>

                    </View>
                </View>
            )
        }
        return (
            <View>
                
            </View>
        )}
}
const styles = StyleSheet.create({
    stadiumName: {
        textAlign: "center",
        alignItems: "center",
        fontFamily: "GillSans-Bold",
        fontSize: 25  
    }, 
    headerContainer:{
        alignContent: "center"
    },
    infoContainer:{
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",

    },
    infoHeader:{
        fontSize: 18,
        fontFamily: "GillSans-Bold"
    },

    map: {
    height: '60%',
    width: '75%',
    textAlign: 'center',
    position: 'relative',
    right: -50

    },
    sections: {
        position: "relative",
        top: 0,
        right: -60,
    
        
     

    
}
})


export default StadiumMap;