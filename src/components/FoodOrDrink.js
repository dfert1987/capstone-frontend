import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Text,
    TouchableOpacity,
    Modal,
    TouchableHighlight  
    } from 'react-native';
 import FoodOrDrinkModal from './FoodOrDrinkModal.js';

    export default class FoodOrDrink extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isModalVisible: false,
                chosenData: '',
            }
        }

        changeModalVisibility = (bool) => {
            this.setState({isModalVisible: bool})
        }

        setData =(data) => {
            this.setState({ chosenData: data })
        }

        render() {
            return (
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>
                        {this.state.chosenData}
                    </Text>
                    <TouchableHighlight onPress={() => this.changeModalVisibility(true)} style={[styles.touchableHighlight, {backgroundColor: 'red'}]}
                            underlayColor={'#f1f1f1'}>
                        <Text style={styles.text}>Choose Food or Drink</Text>
                    </TouchableHighlight>
                    <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
                        animationType='fade'>
                        <FoodOrDrinkModal changeModalVisibility={this.changeModalVisibility} setData={this.setData}/>
                    </Modal>
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        contentContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: -30
        },
        text: {
            marginVertical: 20,
            fontSize: 15,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: 'black',
            position: 'relative',
            // top: -10
            
        },
        touchableHighlight: {
            backgroundColor: 'white',
            alignSelf: 'center',
            width: '70%',
            borderRadius: 20,
            height: 60,
            justifyContent: 'center',
            position: 'relative',
            top: -20
        }
    })