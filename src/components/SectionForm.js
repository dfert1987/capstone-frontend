import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Text,
    TouchableOpacity
    } from 'react-native';
    import RNPickerSelect from 'react-native-picker-select';
   

    export default class SectionForm extends Component {
        state = {
            chosenSection: [],
            chosenStadium: [this.props.stadium]
        }
        
        setChosenSection = (value) => {
            this.setState(
            {chosenSection: value}
            )
        }
        render() {
        return(
            <View style={styles.container}>
                <View styel={styles.buttonContainer}>
              
            <View style={styles.selectionContainer}>
                <RNPickerSelect style={styles.picker}
                    placeholder ={{label: 'Select your section',
                    value: null,
                    
                    }}
                    onValueChange={(value) => this.setChosenSection(value) }
                    items={[
                    { label: 'Section 1', value: '1' },
                    { label: 'Section 2', value: '2' },
                    { label: 'Section 3', value: '3' },
                    { label: 'Section 4', value: '4' },
                    { label: 'Section 5', value: '5' },
                    { label: 'Section 6', value: '6' },
                    { label: 'Section 7', value: '7' },
                    { label: 'Section 8', value: '8' },
                    { label: 'Section 9', value: '9' },
                    { label: 'Section 10', value: '10' },
                    { label: 'Section 11', value: '11' },
                    { label: 'Section 12', value: '12' },
                    { label: 'Section 13', value: '13' },
                    { label: 'Section 14', value: '14' },
                    { label: 'Section 15', value: '15' },
                    ]}
                /> 
                
            </View>      
            <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
            'SectionPage', this.state )}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Go to Selected Section</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    picker: {
       fontFamily: "GillSans-Bold",
       position: "relative",
       marginRight: 80,
       right: 100
       
    },
    button:{
        backgroundColor: "#034389",
        height: 40,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        top: 0,
        right: 10,
        borderRadius: 8,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1
    },
    buttonText: {
        fontFamily: 'GillSans-Bold',
        color: "#03C1FF"
    },
    selectionContainer:{
        flexDirection: "column",
        top: -20,
        alignItems: "center",
        alignContent: 'center',
        textAlign: 'center',
        width: 300,
        right: -30
    },
    buttonContainer: {
        alignItems: "center",
    },
    container: {
        alignItems: "center",
        alignContent: "center",
        textAlign: "center"
    }
});
  