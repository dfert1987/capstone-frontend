import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Text
    
    } from 'react-native';
    import RNPickerSelect from 'react-native-picker-select';
   

    export default class SectionForm extends Component {
        state = {
            chosenSection: []
        }
        render() {
           
        return(
            <View >
                <RNPickerSelect style={styles.picker}
                    placeholder ={{label: 'Click Here to Choose',
                    value: null,
                    }}
                    onValueChange={(value) => console.log(value) }
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
        )
    }
}
const styles = StyleSheet.create({
    picker: {
       fontFamily: "GillSans-Bold"
        
    }
});
  