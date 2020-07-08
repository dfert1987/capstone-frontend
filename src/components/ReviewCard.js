import React, { Component } from 'react';
import {  
    StyleSheet, 
    View,
    Image,
    Text,
    Button,
    TouchableOpacity,
    ImageBackground,
    } 
from 'react-native';
import Modal from 'react-native-modal';


export default class ReviewCard extends Component{

    state = {
        isModalVisible:false
        }

    starPics =(stars) => {

        if(stars > 4.5) {
            return(
                <View>
                    <Image
                     source={require('./5stars.png')}
                     style={styles.stars}
                     />
                </View>
            )
        } else if((stars< 4.5) && (stars > 3.5)) {
            return(

                <View>
                    <Image 
                    source={require('./4starnew.png')}
                    style={styles.stars}
                    />
                </View>
            )
        } else if((stars < 3.5) && (stars > 2.5)) {
            return(
                <View >
                    <Image 
                    style={styles.stars}
                    source={require('./3starnew.png')} />
                </View>
            )
        } else if ((stars < 2.5) && (stars > 1.5)) {
            return(
                <View>
                    <Image
                    style={styles.stars}
                    source={require('./2star.png')}
                    />
                </View>
            )
        } else {
            return(
                <View>
                    <Image 
                    style={styles.stars}
                    source={require('./1starpng.png')}
                    />
                </View>
            )
        }
    }

    toggleModal = () =>{
        this.setState({
        isModalVisible:!this.state.isModalVisible
        })
        }


    render(){

        const review = this.props.review
        const reviewThumb = review.image
        const stars = review.stars

        
        return(
            <View>
            <TouchableOpacity onPress={()=>this.toggleModal()}>
                <View style={styles.cardContainer}>
                    <View style={styles.imageAndText}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: reviewThumb }}
                                style={{ width: 90, 
                                borderWidth: 1, 
                                borderColor: "#20232a",
                                height: 90, 
                                position: 'relative', 
                                top: 0, 
                                right: 0,  
                                padding: 2, 
                                shadowOffset: {width: 0, height: 3}, 
                                shadowRadius: 5,
                                marginLeft: 0,
                                marginRight: 10, 
                                shadowOpacity: 1.0}}
                            />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>"{review.title}"</Text>
                            <View style={styles.stars}>
                                {this.starPics(stars)}
                            </View>
                            <Text style={styles.user}>-{review.user}</Text>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
        <View>
            <Modal
                animationIn="slideInUp" animationOut="slideOutDown"
                onBackdropPress={()=>this.toggleModal()}
                isVisible={this.state.isModalVisible}
                style={{
                    backgroundColor:'white',
                    maxHeight:450,
                    justifyContent:'center',
                    position: 'relative',
                    top: 80,
                    borderWidth: 2,
                    borderRadius: 5,
                    borderColor: '#0493DB'
                }}
            >
            <View style={{ flex: 1 }}>
                <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>- "{review.title}" -</Text>
                <View>
                    <Image source={{ uri: reviewThumb }}
                                style={{ width: 150, 
                                borderWidth: 2, 
                                borderColor: "#20232a",
                                height: 150, 
                                position: 'relative', 
                                top: 10, 
                                alignSelf: 'center',
                                padding: 2, 
                                shadowOffset: {width: 0, height: 3}, 
                                shadowRadius: 5,
                                marginLeft: 0,
                                marginRight: 10, 
                                shadowOpacity: 1.0}}
                            />
                </View>
                <View style={styles.starsModalContainer}>
                    {this.starPics(stars)}
                </View>
                <View>
                    <Text style={styles.fullReview}>"{review.reviewText}"</Text>
                </View>
                <View>
                    <Text style={styles.userName}> - {review.user}</Text>
                </View>
                </View>
            </View>
            <View style={{ flex: 1,justifyContent:'center',position:'absolute',bottom:0}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity 
                        style={{ backgroundColor:'#034389',width:'100%' }}
                        onPress = { ()=>this.toggleModal() }>
                        <Text style={{ color:'#0493DB',textAlign:'center', fontSize: 18, fontFamily: 'GillSans-Bold', padding:10 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        </View>
    </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        position: "relative",
        top: 30,
        marginBottom: 0,
        left: -23,
        borderBottomWidth: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.3)'

        // borderColor: '#ffffff'
    },
    title: {
        fontFamily: "GillSans-Bold",
        fontSize: 18,
        position: "relative",
        top: 3,
        color: '#ffffff',
        textAlign: "center",
        fontStyle: "italic",
        shadowColor: 'rgba(0,0,0, .9)', // IOS
        shadowOffset: { height: 5, width: 5 }, // IOS
        shadowOpacity: 5, 
    },
    imageAndText: {
        flexDirection: 'row',
        
    },
    stars: {
        alignItems: "center",
        position: "relative",
        height: 50,
        top: 3,
        shadowColor: 'rgba(0,0,0, .3)', // IOS
        shadowOffset: { height: 5, width: 5 }, // IOS
        shadowOpacity: 2, 
    },
    content: {
        flexDirection: 'column'
    },
    user: {
        top: 2,
        textAlign: 'right',
        fontStyle: 'italic',
        color: '#ffffff',
        left: -5
    },
    modalTitle:{
        textAlign:'center',
        fontSize: 18,
        fontFamily: 'GillSans-Bold'
    },
    starsModalContainer:{
        alignSelf:"center",
        top: 8
    },
    modalContent:{
        top: 10
    },
    fullReview:{
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        fontSize: 15,
        fontFamily: 'GillSans-Bold',
        alignSelf:'center',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    userName: {
        textAlign: 'right',
        marginRight: 10,
        top: 10,
        fontSize: 15

    }
})