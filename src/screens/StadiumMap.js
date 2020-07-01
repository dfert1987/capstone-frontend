import React, { Component } from 'react';
import {
StyleSheet, 
View,
Image,
Text,
Button,
ScrollView
} 
from 'react-native';
import SectionForm from '../components/SectionForm.js' 


class StadiumMap extends Component {
    
    render() {
        const stadium = this.props.navigation.state.params.stadium
        if(stadium) {
            console.log(stadium)
            return (
                <ScrollView>
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.stadiumName}>{stadium.name}</Text>
                    </View>
                    <View style={styles.mainContainer}>
                    <Text style={styles.infoHeader}>Stadium Info</Text>
                        <View style={styles.infoContainer}>
                            
                            <Text style={styles.info}>City: {stadium.city}</Text>
                            <Text style={styles.info}>Team: {stadium.team}</Text>
                            <Text style={styles.info}>Capacity: {stadium.capacity}</Text>
                        </View>
                        <Image  style={styles.map} source={require('./wrigley.png')} />
                        <Text style={styles.choose}>Section Color Key</Text>
                        <Image style={styles.sections} source={require('./smallsections.png')}/>
                    </View>
                </View>
                <View style={styles.formcontainer}>
                <SectionForm
                navigation = {this.props.navigation}
                stadium ={stadium}
                style={styles.form}/>
                </View>
                </ScrollView>
            )
        }
    }
}
const styles = StyleSheet.create({
    stadiumName:{
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
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
        top: 10,
        fontFamily: "GillSans-Bold" 
    },

    infoHeader:{
        fontSize: 18,
        fontFamily: "GillSans-Bold",
        textAlign: "center",
        
    },

    map: {
    height: '80%',
    width: '75%',
    textAlign: 'center',
    position: 'relative',
    right: -50,
    top:-10
    },
    choose: {
        fontFamily:"GillSans-Bold",
        textAlign: "center",
        position: "relative",
        top: -15
    },
    sections: {
        position: "relative",
        top: -10,
        right: -60,
        marginBottom: 0   
},
form:{
    position: 'relative',
    top: 200
},
formcontainer:{
    position: "relative",
    top: 160,
    alignItems: "center"
},
info:{
    fontFamily:"GillSans-Bold",
}

})

export default StadiumMap;