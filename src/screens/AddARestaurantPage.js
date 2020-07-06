import React, { Component } from 'react';
import SwitchSelector from "react-native-switch-selector";
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-material-dropdown';

import {
    StyleSheet, 
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
    Picker,
    ImageBackground}
from 'react-native';


const mainCategoryOptions = [
    {label: 'Food', value: 'Food'},
    {label: 'Drink', value: 'Drink'},
];


export default class AddARestaurantPage extends Component{
  

    state ={
        id: 9,
        name: "",
        image: "",
        mainCategory: "",
        subCategory: "",
        sectionId: [this.props.navigation.state.params.id]   
        }
    
    
    render(){
        
        
            foodOrDrinkCategories = () => {
                if(this.state.mainCategory == 'Food') {
                    return (
                            <RNPickerSelect tyle={styles.pickerContainer}
                            style={styles.pickerFood}
                            placeholder ={{label: 'Select a category',
                            value: null, position: "relative", 
                            }}
                            doneText={"poo"}
                            onValueChange={(value) => console.log(value)}
                            items={[
                            { label: 'Classic Ballpark Mix', value: 'Classic Ballpark Mix' },
                            { label: 'Burgers', value: 'burgers' },
                            { label: 'Sausages', value: 'sausages' },
                            { label: 'Pizza', value: 'pizza' },
                            { label: 'Sandwiches', value: 'sandwiches' },
                            { label: 'Latin', value: 'latin' },
                            { label: 'Asian', value: 'asian' },
                            { label: 'BBQ', value: 'bbq' },
                            { label: 'Snacks', value: 'snacks' },
                            { label: 'Sweet Treats', value: 'sweet treats' },
                            ]}
                            />
                    )
                } else {
                    return (
                        <View style={styles.pickerContainer}>
                        <RNPickerSelect
                            style={styles.pickerDrink}
                            placeholder ={{label: 'Select a category',
                            value: null,
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                            { label: 'Beer', value: 'beer' },
                            { label: 'Cocktails/Spirits', value: 'cocktails/spirits' },
                            { label: 'Wine', value: 'wine' },
                            { label: 'Non-Alcoholic', value: 'non-alcoholic' }
                            ]}
                            />
                            </View>
                    )
                }
            }

         return(
            <View>
                <Text style={styles.header}>Add A Vendor</Text>
                <View style={styles.form}>
                    <Text style={styles.nameLabel}>Name</Text>
                    <TextInput
                        style={styles.inputBoxName}
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Vendor Name"
                        placeholderTextColor = 'white'
                        selectionColor="blue"
                        keyboardType="email-address"
                    />
                    <Text style={styles.imageLabel}>Image</Text>
                    <TextInput
                        style={styles.inputBoxImage}
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Image URL"
                        placeholderTextColor = 'white'
                        selectionColor="blue"
                        keyboardType="email-address"
                    />
                    <Text style={styles.mainCatLabel}>Food or Drink</Text>
                    <View>
                        <View>
                            <SwitchSelector style={styles.selector}
                               options={mainCategoryOptions}
                               initial={1}
                               onPress={value => this.setState(
                                {mainCategory: value}
                               )}
                               buttonColor="red"
                            />
                        </View>
                        <Text style={styles.subCatLabel}>Category</Text>
                            {foodOrDrinkCategories()}
                    </View>
                </View>
            </View>
         )       
    }
}




const styles = StyleSheet.create({
header: {
    fontFamily: "GillSans-Bold",
    textAlign: "center",
    fontSize: 25
},
selector: {
width: '80%',
alignSelf: 'center',
position: 'relative',
top: 5

},
pickerDrink: {
    fontFamily: "GillSans-Bold"
},
subCatLabel: {
    fontFamily: "GillSans-Bold",
    fontSize: 18,
    position: 'relative',
    top: 10,
    right: -10

},
pickerContainer: {
    top: 20,
    left: 30,
    fontFamily: "GillSans-bold",
},
formContainer: {
    flex: 1,
    backgroundColor: "blue"
},

inputBoxName: {
    width: 300,
    backgroundColor:'#5AA5F7',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    position: "relative",
    top: 10,
    color:'black',
    marginVertical: 10,
    right: -10
},
nameLabel: {
    position: "relative",
    top: 20,
    right: -15,
    fontFamily: "GillSans-Bold",
    fontSize: 18
},
form: {
    backgroundColor: 'rgba(15,105,189,.8)',
    position: 'relative',
    width: '85%',
    height: 400,
    right: -27,
    borderRadius: 6
},
mainCatLabel: {
    position: "relative",
    top: 0,
    right: -15,
    fontSize: 18,
    fontFamily: "GillSans-Bold"
},
inputBoxImage: {
    width: 300,
    backgroundColor:'#5AA5F7',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    position: "relative",
    top: 0,
    color:'black',
    marginVertical: 10,
    right: -10
},
imageLabel: {
    position: "relative",
    top: 8,
    right: -15,
    fontSize: 18,
    fontFamily: "GillSans-Bold"
}

})

