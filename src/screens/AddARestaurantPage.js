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
    ImageBackground,
    TouchableOpacity}
from 'react-native';


const mainCategoryOptions = [
    {label: 'Food', value: 'Food'},
    {label: 'Drink', value: 'Drink'},
];

const localSpecialtyOptions = [
    {label: 'True', value: true},
    {label: 'False', value: false}
]


export default class AddARestaurantPage extends Component{
  

    state ={
        id: 9,
        name: "",
        image: "",
        mainCategory: "",
        cost:2,
        subCategory: "",
        stars: 1,
        localSpecialty: false,
        description: "",
        sectionId: [this.props.navigation.state.params.id]
        }

        handlePress = () => {
            this.backendFunction();
            this.backToStadium(this.props.navigation);
        }

        backToStadium = (navigation) => {
            let stadium = this.props.currentStadium
            navigation.navigate('StadiumMap', stadium )

        }

        backendFunction = () => {
            
            let newRestaurant={}
            newRestaurant.name=this.state.name,
            newRestaurant.description=this.state.description,
            newRestaurant.mainCategory=this.state.mainCategory,
            newRestaurant.subCategory=this.state.subCategory,
            newRestaurant.localSpecialty=this.state.localSpecialty,
            newRestaurant.image=this.state.image,
            newRestaurant.cost=this.state.cost,
            newRestaurant.stars=this.state.stars,
            newRestaurant.section_id=this.state.sectionId[0] 
            

            fetch('http://localhost:3000/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRestaurant)
            })
        }
    
    render(){
            
        
            foodOrDrinkCategories = () => {
                if(this.state.mainCategory == 'Food') {
                    return (
                        <View style={styles.pickerContainer}>
                            <RNPickerSelect 
                            // style={styles.pickerFood}
                            placeholder ={{label: 'Select a category',
                            value: null, position: "relative", 
                            }}
                            onValueChange={value => this.setState(
                                {subCategory: value}
                            )}
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
                            </View>
                    )
                } else {
                    return (
                        <View style={styles.pickerContainer}>
                        <RNPickerSelect
                            placeholder ={{label: 'Select a category',
                            value: null,
                            }}
                            onValueChange={value => this.setState(
                                {subCategory: value}
                            )}
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
                        placeholder="Vendor Name"
                        placeholderTextColor = 'white'
                        selectionColor="blue"
                        onChangeText={text => this.setState(
                            {name: text}
                        )}
                    />
                    <Text style={styles.imageLabel}>Image</Text>
                    <TextInput
                        style={styles.inputBoxImage}
                        placeholder="Image URL"
                        placeholderTextColor = 'white'
                        selectionColor="blue"
                        onChangeText={text => this.setState(
                            {image: text}
                        )}
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
                    <Text style={styles.specialtyLabel}>Local Specialty</Text>
                    <View>
                        <View>
                            <SwitchSelector style={styles.selectorSpecial}
                               options={localSpecialtyOptions}
                               initial={1}
                               onPress={value => this.setState(
                                {localSpecialty: value}
                               )}
                               buttonColor="red"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.descriptionLabel}>Description</Text>
                        <TextInput 
                            style={styles.inputBoxDescription}
                            placeholder="Your description here..."
                            multiline={true}
                            placeholderTextColor = 'white'
                            selectionColor="blue"
                            onChangeText={text => this.setState(
                                {description: text}
                            )}
                        >

                        </TextInput>
                    </View>
                        <TouchableOpacity style={styles.submitButton}
                                onPress={ this.handlePress}

                            >
                            <Text style={styles.submitText}>Submit</Text>
                        </TouchableOpacity>
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

selectorSpecial:{
    width: '80%',
alignSelf: 'center',
position: 'relative',
top: 32
},

submitButton:{
    backgroundColor: 'red',
    width: 150,
    height: 40,
    alignContent: "center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 8,
    position: 'absolute',
    top: 500,
    left: 80
},
submitText: {
    fontFamily: "GillSans-Bold",
    fontSize: 20
},
descriptionLabel:{
fontFamily: "GillSans-Bold",
fontSize: 18,
position: 'relative',
right: -10,
top: 40

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
    height: 550,
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
specialtyLabel: {
    position: "relative",
    top: 27,
    right: -10,
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
inputBoxDescription:{
    width: 300,
    backgroundColor:'#5AA5F7',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    position: "relative",
    top: 40,
    height: 120,
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

