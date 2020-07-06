import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Text,
    TouchableOpacity,
    Modal,
    TouchableHighlight,  
    Dimensions
    } from 'react-native';
    
export default class FoodOrDrinkModal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            width: Dimensions.get('window').width,
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        })
    }
    closeModal = (data) => {
        this.props.changeModalVisibility(false);
        this.props.setData(data)
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} disabled={true} style={styles.contentContainer}>
                <View style={[styles.modal, {width: this.state.width -80}]}>
                    <View style={styles.textView}>
                        <Text style={[styles.text, {fontSize: 20}]}>Food Or Drink</Text>
                        <Text style={styles.text}>Choose One</Text>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableHighlight onPress={() => this.closeModal('Type: Food')} style={styles.touchableHighlight} underlayColor={'#f1f1f1'}>
                            <Text style={[styles.text, {color: 'blue'}]}>Food</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.closeModal('Type: Drink')} style={styles.touchableHighlight} underlayColor={'#f1f1f1'}>
                            <Text style={[styles.text, {color: 'blue'}]}>Drink</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    modal: {
        height: 150,
        paddingTop: 10,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: "white",
        borderRadius: 10,
        
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    touchableHighlight: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row'
    }
});